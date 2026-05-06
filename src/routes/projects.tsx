import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Biraj Bogati" },
      { name: "description", content: "Selected projects by Biraj Bogati: AI recommendation systems, secure storage, realtime chat and more." },
      { property: "og:title", content: "Projects — Biraj Bogati" },
      { property: "og:description", content: "Selected work spanning backend systems, AI and full-stack apps." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <Section title="All projects" eyebrow="Things I've built">
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group p-6 rounded-xl bg-card border border-border shadow-[var(--shadow-card)] block"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-lg group-hover:text-primary transition">{p.name}</h3>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition" />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-secondary text-secondary-foreground">{t}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
