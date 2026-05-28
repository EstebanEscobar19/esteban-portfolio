"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Droplets, Calendar, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AquaSmart",
    subtitle: "Sistema IoT para Gestión de Distritos de Riego",
    description:
      "Prototipo funcional de sistema IoT orientado a la automatización y gestión de distritos de riego mediante monitoreo y medición de caudal.",
    technologies: ["React", "Python", "FastAPI", "IoT", "PostgreSQL"],
    category: "Proyecto Académico",
    github: "https://github.com/SebiceC/Desarrollo-AquaSmart-Frontend",
    icon: Droplets,
  },
  {
    title: "Sistema de Gestión de Almacén",
    subtitle: "Sistema Web de Gestión Empresarial",
    description:
      "Proyecto legacy desarrollado con Flask para la gestión de inventario, productos, clientes, proveedores, ventas e ingresos. Actualmente se encuentra en proceso de mejora y modernización.",
    technologies: ["Python", "Flask", "SQLAlchemy", "SQLite", "HTML/CSS"],
    category: "Proyecto Web",
    github: "https://github.com/EstebanEscobar19/sistema-gestion-almacen",
    icon: Package,
  },
  {
    title: "EventMol",
    subtitle: "Sistema de Gestión de Eventos",
    description:
      "Aplicación web para la gestión y organización de eventos, permitiendo administrar actividades, participantes y recursos desde una interfaz desarrollada con React.",
    technologies: ["React", "Axios", "Tailwind CSS", "Vite", "Express.js"],
    category: "Proyecto Web",
    github: "https://github.com/duvancardozo18/EventMol-frontend",
    icon: Calendar,
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" className="pt-4 pb-16 sm:pb-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Proyectos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                {/* Project Header with Icon */}
                <div className="h-36 bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center relative">
                  <project.icon className="w-14 h-14 text-primary/60 group-hover:text-primary/80 transition-colors" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs text-primary font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mt-1 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-pretty">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button asChild variant="outline" size="sm" className="gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
