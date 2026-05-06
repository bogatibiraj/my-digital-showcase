import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { profile, experience, education, skills } from "@/data/portfolio";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Biraj Bogati" },
      { name: "description", content: "About Biraj Bogati — backend & full-stack developer, education and experience." },
      { property: "og:title", content: "About — Biraj Bogati" },
      { property: "og:description", content: "Background, experience and skills of Biraj Bogati." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <Section title="About me" eyebrow="Who I am">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg text-muted-foreground max-w-3xl leading-relaxed"
        >
          {profile.summary}
        </motion.p>
      </Section>

      <Section title="Experience" eyebrow="Where I've worked">
        <div className="space-y-10">
          {experience.map((e) => (
            <div key={e.company} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">
                  {e.role} <span className="text-primary">@ {e.company}</span>
                </h3>
                <span className="text-sm text-muted-foreground">{e.period}</span>
              </div>
              <div className="mt-6 space-y-6">
                {e.projects.map((p) => (
                  <div key={p.name}>
                    <h4 className="font-medium text-accent mb-2">{p.name}</h4>
                    <ul className="space-y-1.5 text-sm text-muted-foreground list-disc pl-5">
                      {p.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Skills" eyebrow="Toolbox">
        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((s) => (
            <div key={s.category} className="p-5 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-3 text-primary">{s.category}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education" eyebrow="Studies">
        <div className="space-y-4">
          {education.map((ed) => (
            <div key={ed.title + ed.period} className="flex flex-wrap items-baseline justify-between gap-2 p-5 rounded-xl bg-card border border-border">
              <div>
                <h3 className="font-semibold">{ed.title}</h3>
                <p className="text-sm text-muted-foreground">{ed.place}</p>
              </div>
              <div className="text-sm text-muted-foreground">
                {ed.period}{ed.note ? ` · ${ed.note}` : ""}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
