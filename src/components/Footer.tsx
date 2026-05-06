import { Github, Linkedin, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Biraj Bogati. Built with React & Motion.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://github.com/Birajbgt" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Github size={18} /></a>
          <a href="https://linkedin.com/in/birajbogati/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Linkedin size={18} /></a>
          <a href="https://birajbogati.com.np" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Globe size={18} /></a>
          <a href="mailto:virajbogati11@gmail.com" className="hover:text-primary transition-colors"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
