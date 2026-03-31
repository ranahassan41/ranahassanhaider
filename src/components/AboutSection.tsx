import { motion } from "framer-motion";
import { User, GraduationCap, Palette, Sparkles } from "lucide-react";

const details = [
  { icon: User, label: "Name", value: "Rana Hassan Haider" },
  { icon: Palette, label: "Profession", value: "Graphic Designer (Logo)" },
  { icon: GraduationCap, label: "Education", value: "BSCS Undergraduate" },
  { icon: Sparkles, label: "Level", value: "Passionate Beginner" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-3">Get to know me</p>
          <h2 className="section-heading">
            About <span className="gold-gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {details.map((d) => (
              <div key={d.label} className="glass-card p-5 flex flex-col gap-2">
                <d.icon className="text-primary" size={22} />
                <span className="text-xs font-body text-muted-foreground uppercase tracking-wider">{d.label}</span>
                <span className="font-body font-semibold text-foreground text-sm">{d.value}</span>
              </div>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground font-body leading-relaxed text-base mb-6">
              I'm a passionate beginner graphic designer specializing in logo design and poster creation.
              Currently pursuing my BSCS degree, I'm focused on building a strong creative identity
              and delivering visually impactful designs.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed text-base">
              My approach combines creativity with a growth mindset. I believe in the power of branding
              and visual storytelling to connect businesses with their audiences. Every design I create
              is a step toward mastering the art of visual communication.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
