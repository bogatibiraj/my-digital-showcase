import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border"
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg tracking-tight">
          <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
            Biraj.dev
          </span>
        </Link>
        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="px-3 py-2 text-sm rounded-md text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "px-3 py-2 text-sm rounded-md text-foreground bg-secondary" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
