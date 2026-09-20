"use client";
import { useMotionPreference as useReducedMotion } from "./useMotionPreference";
import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "./animations";
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduced ? fadeIn : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
export function ChapterLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="eyebrow chapter-label">
      <span>{number}</span>
      <span className="label-line" />
      {children}
    </p>
  );
}
