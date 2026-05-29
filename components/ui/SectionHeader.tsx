import { motion } from "framer-motion";
import { fadeInUpVariants } from "../../lib/motion-variants";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  highlight?: string;
}

const SectionHeader = ({ title, subtitle, highlight }: SectionHeaderProps) => {
  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-12 sm:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text mb-4 sm:mb-5">
        {title}{" "}
        {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      <p className="text-base sm:text-lg text-text-light max-w-2xl mx-auto px-2 leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
