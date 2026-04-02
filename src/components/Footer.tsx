import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rana Hassan Haider. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Instagram, href: "https://www.instagram.com/thelogodesignerofficial/" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/hassan-haider-designer" },
            { icon: Mail, href: "mailto:thelogodesignerofficial@gmail.com" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
