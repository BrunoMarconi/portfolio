// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative flex items-center bg-[#020617] overflow-hidden pt-40 pb-20">
      {/* Grid Pattern sutil */}
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-tight">
              Desarrollador <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-slate-500">
                Fullstack & Soluciones Digitales
              </span>
            </h1>

            <p className="max-w-xl text-slate-400 text-lg mb-8 leading-relaxed">
              En <span className="text-white font-semibold">Runtime</span> eliminamos la fricción entre tu cliente y tu servicio con interfaces de alto rendimiento.
            </p>
          </div>

          {/* Terminal reducida para no ocupar tanto espacio vertical */}
          <div className="hidden lg:block relative group scale-90 origin-right">
            <div className="relative bg-[#0f172a] border border-slate-800 rounded-lg p-6 font-mono text-sm shadow-2xl">
              <div className="flex gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-amber-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
              </div>
              <div className="space-y-1">
                <p className="text-indigo-400 italic">// runtime_config.json</p>
                <p className="text-slate-400">status: <span className="text-emerald-400">"ready_for_deploy"</span>,</p>
                <p className="text-slate-400">performance: <span className="text-emerald-400">1.0</span></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}