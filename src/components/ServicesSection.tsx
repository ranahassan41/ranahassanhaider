import { motion } from "framer-motion";
import { PenTool, Image } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Logo Design",
    desc: "Unique and professional logo concepts with brand-focused designs that make your business stand out.",
    points: ["Custom logo concepts", "Brand-focused approach", "Multiple revisions"],
  },
  {
    icon: Image,
    title: "Poster Design",
    desc: "Eye-catching promotional posters for social media and print-ready designs that capture attention.",
    points: ["Social media graphics", "Print-ready designs", "Event promotions"],
  },
];

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.03 },
  }),
};

const ServicesSection = () => {
  const headingText = "Services";

  return (
    <section id="services" className="py-24 relative">
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
            What I offer
          </motion.p>
          <h2 className="section-heading">
            My{" "}
            <span className="gold-gradient-text inline-flex overflow-hidden">
              {headingText.split("").map((char, i) => (
                <motion.span key={i} custom={i} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8 group hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={26} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">{service.desc}</p>
              <ul className="flex flex-col gap-2">
                {service.points.map((p) => (
                  <li key={p} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
