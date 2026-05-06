import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">{eyebrow}</p>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}
