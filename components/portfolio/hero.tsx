"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Floating particles component
function FloatingParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 4,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute top-1/2 left-1/2 rounded-full bg-primary/40"
          style={{
            width: particle.size,
            height: particle.size,
          }}
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 0,
          }}
          animate={{
            x: [particle.x, particle.x + 20, particle.x],
            y: [particle.y, particle.y - 20, particle.y],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image with glassmorphism and glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Secondary glow pulse */}
            <motion.div
              className="absolute -inset-4 rounded-full bg-primary/10 blur-xl"
              animate={{
                scale: [0.95, 1.05, 0.95],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main circle with glassmorphism */}
            <motion.div
              className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-2xl shadow-primary/20"
              style={{
                background: "linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(15, 23, 42, 0.8) 50%, rgba(56, 189, 248, 0.05) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(56, 189, 248, 0.2)",
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Inner decorative ring */}
              <div 
                className="absolute inset-2 rounded-full"
                style={{
                  border: "1px dashed rgba(56, 189, 248, 0.15)",
                }}
              />
            </motion.div>

            {/* Initials - static, not rotating */}
            <div className="absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
              <motion.span
                className="text-6xl sm:text-7xl font-bold text-primary drop-shadow-lg"
                style={{
                  textShadow: "0 0 30px rgba(56, 189, 248, 0.4)",
                }}
                animate={{
                  textShadow: [
                    "0 0 20px rgba(56, 189, 248, 0.3)",
                    "0 0 40px rgba(56, 189, 248, 0.5)",
                    "0 0 20px rgba(56, 189, 248, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                JE
              </motion.span>
            </div>

            {/* Floating particles around the circle */}
            <FloatingParticles />

            {/* Status indicator */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background" />
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-primary text-sm sm:text-base font-medium mb-2">
                ¡Hola! Soy
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
            >
              Juan Esteban Escobar Portilla
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl sm:text-2xl text-primary font-medium mb-6"
            >
              Ingeniero de Software
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed space-y-4"
            >
              <p className="text-pretty">
                Ingeniero de Software, con interés en el desarrollo web, 
                bases de datos y construcción de aplicaciones funcionales orientadas a 
                resolver necesidades reales.
              </p>
              <p className="text-pretty">
                Durante mi formación académica y experiencia práctica he trabajado con 
                tecnologías como React, Python, Node.js, PostgreSQL y herramientas de 
                desarrollo colaborativo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <Button asChild className="gap-2">
                <a
                  href="https://github.com/EstebanEscobar19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a
                  href="https://www.linkedin.com/in/esteban-escobar-je/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href="mailto:juanes_escobar@hotmail.com">
                  <Mail size={18} />
                  Correo
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a
                  href="https://wa.me/573174778748"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </Button>
              {/* CV button - hidden for now, uncomment when ready */}
              {/* <Button asChild variant="ghost" className="gap-2">
                <a href="/cv.pdf" download>
                  <FileText size={18} />
                  CV
                </a>
              </Button> */}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
