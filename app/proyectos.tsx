"use client";

import Image from 'next/image';

interface ProjectData {
  id: string;
  name: string;
  url: string;
  tag: string;
  color: string;
  tech: string[];
  image: string; // Nueva propiedad para la ruta de la imagen
}

const PROJECTS: ProjectData[] = [
  { 
    id: "01", 
    name: "Runtime Fit", 
    url: "https://barber-o8x4.vercel.app/", 
    tag: "Salud", 
    color: "from-indigo-500",
    tech: ["Next.js", "Stripe"],
    image: "/project1.jpg" // Ruta relativa a la carpeta public
  },
  { 
    id: "02", 
    name: "Runtime Dine", 
    url: "https://amigos-pi.vercel.app/", 
    tag: "Gastronomía", 
    color: "from-orange-500",
    tech: ["TSX", "Framer Motion"],
    image: "/project2.jpg"
  },
  { 
    id: "03", 
    name: "Runtime fit", 
    url: "https://gym-seven-xi.vercel.app/", 
    tag: "Gastronomía", 
    color: "from-orange-500",
    tech: ["TSX", "Framer Motion"],
    image: "/project3.jpg"
  },
];

export default function Projects() {
  
  function handleOpenDemo(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="py-24 bg-[#020617]" id="sistemas">
      <div className="container mx-auto px-6">
        
        {/* Header de sección */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 italic font-mono tracking-tighter">// PROYECTOS_SELECCIONADOS</h2>
            <p className="text-slate-500 max-w-md italic font-light">Sistemas de alta fidelidad renderizados en el Edge.</p>
          </div>
          <div className="hidden md:block text-slate-800 font-mono text-[10px] tracking-[0.5em]">2026_VERSION</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative cursor-pointer"
              onClick={() => handleOpenDemo(project.url)}
            >
              {/* Contenedor de Imagen con Next/Image */}
              <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden border border-slate-800 group-hover:border-indigo-500/50 transition-all duration-500 relative shadow-2xl">
                
                {/* Imagen Real */}
                <Image 
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Overlay de Gradiente Dinámico */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80`} />
                
                {/* Indicador de Acción */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                    Launch_System
                  </div>
                </div>
              </div>

              {/* Detalles inferiores */}
              <div className="mt-6 flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                    <p className="text-slate-500 text-[10px] font-mono uppercase tracking-widest">{project.tag}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[9px] font-mono border border-slate-800 text-slate-500 px-2 py-1 rounded bg-slate-900/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}