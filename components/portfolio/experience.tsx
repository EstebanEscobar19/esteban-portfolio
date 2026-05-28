"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Desarrollador de Software",
    company: "Universidad Surcolombiana",
    location: "Neiva, Huila",
    period: "Agosto 2024 - Junio 2025",
    duration: "10 meses",
    description:
      "Participé en el desarrollo frontend y backend de un prototipo funcional de sistema IoT para la gestión de distritos de riego, integrando automatización, medición de caudal y trabajo colaborativo bajo metodología Scrum.",
    technologies: ["ReactJS", "APIs REST", "PostgreSQL", "Scrum"],
    type: "Proyecto Académico",
  },
  {
    title: "Desarrollador de Software - Pasantía",
    company: "Alcaldía de Neiva",
    location: "Neiva, Huila",
    period: "Junio 2024 - Diciembre 2024",
    duration: "6 meses",
    description:
      "Participé en el desarrollo del nuevo portal institucional, apoyando funcionalidades frontend y backend, consumo de APIs y organización de actividades mediante Jira.",
    technologies: ["Node.js", "React", "MongoDB", "Jira", "Scrum"],
    type: "Pasantía",
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="py-20 sm:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experiencia Profesional
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className={`relative md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-12 md:ml-0"
                    : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block ${
                    index % 2 === 0 ? "right-0 translate-x-1/2 md:-right-2" : "left-0 -translate-x-1/2 md:-left-2"
                  }`}
                />

                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  {/* Type badge */}
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                    {exp.type}
                  </span>

                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {exp.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Briefcase size={14} />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
