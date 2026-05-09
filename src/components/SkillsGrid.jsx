import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";

export default function SkillsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {skillGroups.map((group, index) => {
        const Icon = group.icon;
        return (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            className="quiet-card p-5 hover:border-[#3A3A3A] hover:bg-[#161616]"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-[#262626] bg-[#0D0D0D] text-[#A3A3A3]">
                <Icon />
              </span>
              <h3 className="text-sm font-semibold text-[#FAFAFA]">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="tech-pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
