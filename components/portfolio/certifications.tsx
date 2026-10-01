"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap } from "lucide-react";

const certifications = [
  {
    title: "Ingeniero de Software",
    issuer: "Universidad Surcolombiana",
    date: "nov. 2020 – ene. 2026",
    type: "Formación Académica",
    icon: GraduationCap,
  },
  {
    title: "Full Stack Empresarial con Spring Boot y Angular",
    issuer: "Dev Senior Code",
    date: "2025",
    type: "Certificación",
    icon: Award,
  },
  {
    title: "Scrum Fundamentals Certified (SFC™)",
    issuer: "ScrumStudy",
    date: "2025",
    type: "Certificación",
    icon: Award,
  },
  {
    title: "Lean Six Sigma - White Belt",
    issuer: "Opexleader",
    date: "2025",
    type: "Certificación",
    icon: Award,
  },
  {
    title: "Fundamentos de Ingeniero IA con Python",
    issuer: "Codigofacilito",
    date: "2026",
    type: "Certificación",
    icon: Award,
  },
  {
    title: "Analítica del Talento Humano mediante Power BI",
    issuer: "Universidad Surcolombiana",
    date: "2026",
    type: "Certificación",
    icon: Award,
  },
];

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificaciones" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Educación y Formación
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <cert.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Type badge */}
                <span className="inline-block self-start px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded mb-3">
                  {cert.type}
                </span>

                {/* Content */}
                <h3 className="font-semibold text-foreground mb-2 leading-tight text-balance">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-primary mt-auto pt-4">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
