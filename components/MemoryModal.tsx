"use client";
import { useMotionPreference as useReducedMotion } from "./useMotionPreference";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Memory } from "@/data/birthdayData";
import { MemoryImage } from "./MemoryImage";
export function MemoryModal({
  memories,
  index,
  onChange,
  onClose,
}: {
  memories: Memory[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const element = dialog.current;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element?.showModal();
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
      previous?.focus({ preventScroll: true });
    };
  }, []);
  const memory = memories[index];
  function move(direction: number) {
    onChange((index + direction + memories.length) % memories.length);
  }
  return (
    <dialog
      ref={dialog}
      className="memory-dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "Tab") {
          const buttons = Array.from(
            e.currentTarget.querySelectorAll<HTMLButtonElement>(
              "button:not(:disabled)",
            ),
          );
          const first = buttons[0];
          const last = buttons[buttons.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          move(-1);
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          move(1);
        }
      }}
    >
      <div className="modal-shell">
        <button
          autoFocus
          className="icon-button modal-close"
          aria-label="Close memory"
          onClick={onClose}
        >
          <X size={22} />
        </button>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: reduced ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.2 }}
          >
            <MemoryImage key={memory.image} memory={memory} modal />
            <div className="modal-copy">
              <p className="eyebrow">{memory.date}</p>
              <h2 id="modal-title">{memory.title}</h2>
              <p id="modal-description">{memory.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="modal-controls">
          <button
            className="icon-button"
            aria-label="Previous memory"
            onClick={() => move(-1)}
            disabled={memories.length < 2}
          >
            <ChevronLeft size={20} />
          </button>
          <span aria-live="polite">
            {index + 1} / {memories.length}
          </span>
          <button
            className="icon-button"
            aria-label="Next memory"
            onClick={() => move(1)}
            disabled={memories.length < 2}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </dialog>
  );
}
