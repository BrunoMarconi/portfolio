// src/components/Header.tsx
import { Zap } from "lucide-react"; // O cualquier icono que prefieras

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 px-6 py-4">
      <nav className="max-w-6xl mx-auto bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-2xl px-6 py-4 flex justify-between items-center shadow-2xl">
        
        {/* LOGO */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Zap size={18} className="text-white fill-white" />
          </div>
          <span className="text-white font-black tracking-tighter text-xl italic uppercase">
            Runtime<span className="text-indigo-500">.</span>
          </span>
        </div>

        {/* LINKS - Ocultos en móvil, visibles en MD */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#sistemas" className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Sistemas</a>
          <a href="#proceso" className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Proceso</a>
          <a href="#mantenimiento" className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Soporte</a>
        </div>

        {/* BOTÓN CTA */}
        <div>
          <button className="bg-white text-black px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter hover:bg-indigo-500 hover:text-white transition-all">
            Abrir_Proyecto
          </button>
        </div>

      </nav>
    </header>
  );
}