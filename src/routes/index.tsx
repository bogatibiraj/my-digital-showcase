import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { profile, skills, projects } from "@/data/portfolio";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Biraj Bogati — Backend & Full-Stack Developer" },
      { name: "description", content: "Portfolio of Biraj Bogati — backend & full-stack developer building scalable web apps with Node.js, NestJS, React and TypeScript." },
      { property: "og:title", content: "Biraj Bogati — Backend & Full-Stack Developer" },
      { property: "og:description", content: "Scalable backend & full-stack web apps with NestJS, Node.js, React, TypeScript." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.2em] text-primary mb-4"
        >
          Hi, I'm {profile.name.split(" ")[0]}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl"
        >
          {profile.title.split("&")[0]}&{" "}
          <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
            Full-Stack Developer
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl"
        >
          {profile.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground font-medium shadow-[var(--shadow-glow)] hover:opacity-90 transition"
          >
            View my work <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition"
          >
            Get in touch
          </Link>
          <div className="flex items-center gap-2 ml-2">
            <a href={profile.github} target="_blank" rel="noreferrer" className="p-3 rounded-lg border border-border hover:text-primary transition"><Github size={18} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-lg border border-border hover:text-primary transition"><Linkedin size={18} /></a>
            <a href={`mailto:${profile.email}`} className="p-3 rounded-lg border border-border hover:text-primary transition"><Mail size={18} /></a>
          </div>
        </motion.div>
      </section>

      {/* Skills preview */}
      <Section title="What I work with" eyebrow="Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-5 rounded-xl bg-card border border-border shadow-[var(--shadow-card)]"
            >
              <h3 className="font-semibold mb-3 text-primary">{s.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li key={item} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured projects */}
      <Section title="Featured projects" eyebrow="Selected work">
        <div className="grid md:grid-cols-2 gap-5">
          {projects.slice(0, 4).map((p, i) => (
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
              <h3 className="font-semibold text-lg group-hover:text-primary transition">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-secondary text-secondary-foreground">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-primary hover:underline">
            See all projects <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </div>
  );
}
