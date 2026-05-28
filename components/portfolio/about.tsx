"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "Frontend con React y desarrollo backend con tecnologías web.",
  },
  {
    icon: Rocket,
    title: "Proyectos Académicos",
    description: "Participación en proyectos relacionados con IoT y desarrollo web.",
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description: "Experiencia trabajando bajo metodologías ágiles y colaboración grupal.",
  },
  {
    icon: GraduationCap,
    title: "Aprendizaje Continuo",
    description: "Interés constante en fortalecer conocimientos y habilidades técnicas.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sobre Mí
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Soy <span className="text-foreground font-medium">Juan Esteban Escobar Portilla</span>, 
              Ingeniero de Software egresado de la Universidad Surcolombiana (2020-2025).
              Tengo interés en el desarrollo web, bases de datos y construcción de aplicaciones 
              funcionales orientadas a resolver necesidades reales.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Durante mi formación académica tuve acercamiento a diferentes áreas del desarrollo 
              de software, incluyendo desarrollo frontend con React, backend con Python y Node.js, 
              bases de datos y consumo de APIs.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              He participado en proyectos académicos y prácticos relacionados con sistemas IoT, 
              portales institucionales y desarrollo de aplicaciones web, aplicando trabajo 
              colaborativo y metodologías ágiles.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {[
                "React",
                "Python",
                "Node.js",
                "PostgreSQL",
                "MongoDB",
                "FastAPI",
                "Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
