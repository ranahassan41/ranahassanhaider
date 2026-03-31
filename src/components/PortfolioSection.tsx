import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import logosGrid from "@/assets/logos-grid.jpg";
import logosShowcase from "@/assets/logos-showcase.jpg";

const projects = [
  { img: portfolio1, title: "Luxury Brand Identity", category: "Logo Design" },
  { img: portfolio2, title: "Typography Poster", category: "Poster Design" },
  { img: logosGrid, title: "Logo Collection", category: "Brand Concepts" },
  { img: portfolio3, title: "Corporate Stationery", category: "Branding" },
  { img: portfolio4, title: "Geometric Logo Concept", category: "Logo Design" },
  { img: logosShowcase, title: "Client Logo Showcase", category: "Logo Design" },
  { img: portfolio5, title: "Social Media Campaign", category: "Poster Design" },
  { img: portfolio6, title: "Logo Collection", category: "Logo Design" },
];

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.03 },
  }),
};

const PortfolioSection = () => {
  const headingText = "Portfolio";

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(43_74%_55%_/_0.04)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-6 relative z-10">
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
            Recent projects
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title + i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
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
