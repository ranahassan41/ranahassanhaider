import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Gmail", value: "thelogodesignerofficial@gmail.com", href: "mailto:thelogodesignerofficial@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Hassan Haider", href: "https://www.linkedin.com/in/hassan-haider-designer" },
  { icon: Instagram, label: "Instagram", value: "@thelogodesignerofficial", href: "https://www.instagram.com/thelogodesignerofficial/" },
  { icon: Phone, label: "Contact", value: "+92 345 0075554", href: "tel:+923450075554" },
];

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.03 },
  }),
};

const ContactSection = () => {
  const headingText = "Touch";

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-3"
          >
            Let's connect
          </motion.p>
          <h2 className="section-heading">
            Get In{" "}
            <span className="gold-gradient-text inline-flex overflow-hidden">
              {headingText.split("").map((char, i) => (
                <motion.span key={i} custom={i} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-muted-foreground leading-relaxed text-center mb-10"
          >
            Have a project in mind or want to collaborate? Feel free to reach out. I'd love to hear from you!
          </motion.p>

          <div className="grid grid-cols-2 gap-4">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-5 flex flex-col items-center gap-3 hover:border-primary/40 hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary" size={22} />
                </div>
                <p className="font-body text-sm text-foreground font-semibold">{item.label}</p>
                <p className="font-body text-xs text-muted-foreground break-all">{item.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
