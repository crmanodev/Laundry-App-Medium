import type { NextRequest } from "next/server";
import fs from "node:fs";
import path from "node:path";
import {
  compose,
  maxLength,
  minLength,
  phone as phoneValidator,
  required,
} from "@/lib/validation/validators";

/**
 * POST /api/contact — validate and persist a website enquiry to
 * `src/data/messages.json` (the admin can hook this up to email/DB later).
 */

interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  message: string;
  receivedAt: string;
}

const MESSAGES_FILE = path.join(process.cwd(), "src", "data", "messages.json");

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { name, phone, message } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof phone !== "string" ||
    typeof message !== "string"
  ) {
    return Response.json({ error: "Missing fields." }, { status: 400 });
  }

  const nameValidator = compose(required, minLength(2), maxLength(80));
  const phoneValidatorChain = compose(
    required,
    phoneValidator,
    maxLength(16),
  );
  const messageValidator = compose(
    required,
    minLength(10),
    maxLength(2000),
  );

  const errors = {
    name: nameValidator(name),
    phone: phoneValidatorChain(phone),
    message: messageValidator(message),
  };

  const firstError = Object.values(errors).find(Boolean);
  if (firstError) {
    return Response.json({ error: firstError }, { status: 400 });
  }

  const entry: ContactMessage = {
    id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: name.trim(),
    phone: phone.trim(),
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  };

  try {
    let messages: ContactMessage[] = [];
    if (fs.existsSync(MESSAGES_FILE)) {
      const raw = fs.readFileSync(MESSAGES_FILE, "utf8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) messages = parsed as ContactMessage[];
    }
    messages.push(entry);
    fs.writeFileSync(
      MESSAGES_FILE,
      `${JSON.stringify(messages, null, 2)}\n`,
      "utf8",
    );
  } catch {
    return Response.json(
      { error: "Could not save your message. Please try WhatsApp instead." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true, id: entry.id }, { status: 201 });
}
