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

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-3">What I offer</p>
          <h2 className="section-heading">
            My <span className="gold-gradient-text">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
