import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";

const projects = [
  { img: portfolio1, title: "Luxury Brand Identity", category: "Logo Design" },
  { img: portfolio2, title: "Typography Poster", category: "Poster Design" },
  { img: portfolio3, title: "Corporate Stationery", category: "Branding" },
  { img: portfolio4, title: "Geometric Logo Concept", category: "Logo Design" },
  { img: portfolio5, title: "Social Media Campaign", category: "Poster Design" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(43_74%_55%_/_0.04)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-3">Recent projects</p>
          <h2 className="section-heading">
            My <span className="gold-gradient-text">Portfolio</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                width={640}
                height={512}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h4 className="font-display text-lg font-semibold text-foreground">{project.title}</h4>
                <p className="font-body text-sm text-primary mt-1">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
