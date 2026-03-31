import { motion } from "framer-motion";

const skills = [
  { name: "Logo Design", level: 80 },
  { name: "Poster Design", level: 70 },
  { name: "Creativity & Concepts", level: 85 },
  { name: "Adobe Illustrator", level: 65 },
  { name: "Adobe Photoshop", level: 60 },
  { name: "Brand Identity", level: 70 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(43_74%_55%_/_0.04)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-3">What I do best</p>
          <h2 className="section-heading">
            My <span className="gold-gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-body text-sm font-medium text-foreground">{skill.name}</span>
                <span className="font-body text-sm text-primary">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-yellow-300"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
