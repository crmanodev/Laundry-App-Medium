"use client";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

export interface ErrorModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  message: string;
}

export function ErrorModal({
  open,
  onClose,
  title = "Something went wrong",
  message,
}: ErrorModalProps) {
  return (
    <Modal open={open} onClose={onClose} title={title}>
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-2xl text-red-600">
          !
        </span>
        <p className="text-sm text-zinc-600">{message}</p>
        <Button variant="danger" onClick={onClose}>
          Close
        </Button>
      </div>
    </Modal>
  );
}
