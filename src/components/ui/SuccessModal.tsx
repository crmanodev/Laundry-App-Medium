"use client";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

export interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  message: string;
}

export function SuccessModal({
  open,
  onClose,
  title = "Success",
  message,
}: SuccessModalProps) {
  return (
    <Modal open={open} onClose={onClose} title={title}>
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-success-soft text-2xl text-success">
          ✓
        </span>
        <p className="text-sm text-zinc-600">{message}</p>
        <Button onClick={onClose}>Continue</Button>
      </div>
    </Modal>
  );
}
