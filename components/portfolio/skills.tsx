"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ListFilter, Sigma } from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    name: "Backend",
    skills: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
    ],
  },
  {
    name: "Datos y BI",
    skills: [
      {
        name: "Power BI",
        icon: "/icons/powerbi.svg",
      },
      {
        name: "Power Query",
        iconComponent: ListFilter,
        iconColor: "text-[#29A7D8]",
      },
      {
        name: "DAX",
        iconComponent: Sigma,
        iconColor: "text-[#4A78C2]",
      },
    ],
  },
  {
    name: "Bases de Datos",
    skills: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
  {
    name: "Herramientas",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.simpleicons.org/github/F05032",
      },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="habilidades" className="py-20 sm:py-32 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Habilidades Técnicas
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-6 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + categoryIndex * 0.1 }}
              className={`text-center md:col-span-2 ${categoryIndex === 3 ? "md:col-start-2" : categoryIndex === 4 ? "md:col-start-4" : ""}`}
            >
              <h3 className="text-sm font-medium text-muted-foreground mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="group flex flex-col items-center gap-1.5"
                  >
                    <div className="w-14 h-14 rounded-lg bg-card border border-border p-2 flex items-center justify-center group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300">
                      {"iconComponent" in skill && skill.iconComponent ? (
                        <skill.iconComponent
                          className={`w-full h-full ${skill.iconColor}`}
                          aria-label={skill.name}
                        />
                      ) : (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          crossOrigin="anonymous"
                        />
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
