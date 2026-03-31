import { motion } from "framer-motion";
import { User, GraduationCap, Palette, Sparkles } from "lucide-react";

const details = [
  { icon: User, label: "Name", value: "Rana Hassan Haider" },
  { icon: Palette, label: "Profession", value: "Graphic Designer (Logo)" },
  { icon: GraduationCap, label: "Education", value: "BSCS Undergraduate" },
  { icon: Sparkles, label: "Level", value: "Passionate Beginner" },
];

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.03 },
  }),
};

const AboutSection = () => {
  const headingText = "Me";

  return (
    <section id="about" className="py-24 relative">
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
            Get to know me
          </motion.p>
          <h2 className="section-heading">
            About{" "}
            <span className="gold-gradient-text inline-flex overflow-hidden">
              {headingText.split("").map((char, i) => (
                <motion.span key={i} custom={i} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {details.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-5 flex flex-col gap-2"
              >
                <d.icon className="text-primary" size={22} />
                <span className="text-xs font-body text-muted-foreground uppercase tracking-wider">{d.label}</span>
                <span className="font-body font-semibold text-foreground text-sm">{d.value}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
