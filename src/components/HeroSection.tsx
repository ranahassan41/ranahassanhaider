import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay: 0.3 + i * 0.1 },
  }),
};

const HeroSection = () => {
  const descWords = "Creative Logo Designer & Visual Identity Enthusiast. Crafting unique brand experiences through design.".split(" ");

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_74%_55%_/_0.06)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 py-24">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial="hidden"
          animate="visible"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4"
          >
            Graphic Designer
          </motion.p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block"
            >
              Rana Hassan{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="gold-gradient-text inline-block"
            >
              Haider
            </motion.span>
          </h1>
          <p className="text-muted-foreground font-body text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            {descWords.map((word, i) => (
              <motion.span key={i} custom={i} variants={wordVariants} className="inline-block mr-[0.3em]">
                {word}
              </motion.span>
            ))}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide hover:shadow-[var(--gold-glow)] transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 rounded-full border border-primary/40 text-primary font-body font-semibold text-sm tracking-wide hover:bg-primary/10 transition-all duration-300"
            >
              Hire Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 animate-glow-pulse">
            <img
              src={profileImg}
              alt="Rana Hassan Haider"
              className="w-full h-full object-cover"
              width={512}
              height={512}
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
