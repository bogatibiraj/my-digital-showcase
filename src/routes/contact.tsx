import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Globe, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Biraj Bogati" },
      { name: "description", content: "Get in touch with Biraj Bogati for collaboration, freelance or full-time opportunities." },
      { property: "og:title", content: "Contact — Biraj Bogati" },
      { property: "og:description", content: "Reach out via email, LinkedIn or GitHub." },
    ],
  }),
  component: Contact,
});

const items = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Github, label: "GitHub", value: "Birajbgt", href: profile.github },
  { icon: Linkedin, label: "LinkedIn", value: "birajbogati", href: profile.linkedin },
  { icon: Globe, label: "Website", value: "birajbogati.com.np", href: profile.website },
  { icon: MapPin, label: "Location", value: profile.location, href: "#" },
];

function Contact() {
  return (
    <Section title="Let's build something together" eyebrow="Contact">
      <p className="text-muted-foreground max-w-2xl mb-10">
        Open to backend, full-stack and freelance opportunities. The fastest way to reach me is by email.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map(({ icon: Icon, label, value, href }, i) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -3 }}
            className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary transition"
          >
            <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-[image:var(--gradient-primary)] text-primary-foreground">
              <Icon size={20} />
            </div>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
              <div className="text-sm font-medium truncate">{value}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
