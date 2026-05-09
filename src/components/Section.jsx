import { motion } from "framer-motion";

export default function Section({ id, eyebrow, title, description, children, className = "" }) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"
      >
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="section-title">{title}</h2>}
            {description && <p className="section-description">{description}</p>}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
