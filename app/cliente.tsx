"use client";
import React, { useState } from 'react';
import { Send, Terminal } from 'lucide-react';

const Contact = () => {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden" id="contacto">
      {/* Círculo de luz decorativo */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 blur-[100px] rounded-full -mr-20 -mb-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-slate-900/30 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Info de contacto / Branding */}
            <div className="p-12 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-indigo-500 mb-8">
                  <Terminal size={20} />
                  <span className="font-mono text-sm tracking-tighter uppercase">system.connect()</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
                  ¿Listo para ejecutar <br /> 
                  <span className="text-slate-500 italic">tu próximo nivel?</span>
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Estamos especializados en arquitecturas frontend modernas. Si buscas rendimiento y precisión, estás en el lugar correcto.
                </p>
              </div>

              <div className="mt-12 space-y-2">
                <p className="text-xs font-mono text-slate-600 uppercase">Localización</p>
                <p className="text-slate-300">Remote / Worldwide</p>
                <p className="text-indigo-400 font-mono text-sm mt-4 italic">hello@runtime.studio</p>
              </div>
            </div>

            {/* Formulario Real */}
            <div className="p-12 bg-slate-900/20">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Nombre</label>
                  <input 
                    type="text" 
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    className={`w-full bg-[#020617] border rounded-lg px-4 py-3 text-white transition-all outline-none ${
                      focused === 'name' ? 'border-indigo-500 ring-1 ring-indigo-500/20' : 'border-slate-800'
                    }`}
                    placeholder="Tu nombre o empresa"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    className={`w-full bg-[#020617] border rounded-lg px-4 py-3 text-white transition-all outline-none ${
                      focused === 'email' ? 'border-indigo-500 ring-1 ring-indigo-500/20' : 'border-slate-800'
                    }`}
                    placeholder="email@ejemplo.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Proyecto</label>
                  <textarea 
                    rows={4}
                    onFocus={() => setFocused('msg')}
                    onBlur={() => setFocused(null)}
                    className={`w-full bg-[#020617] border rounded-lg px-4 py-3 text-white transition-all outline-none resize-none ${
                      focused === 'msg' ? 'border-indigo-500 ring-1 ring-indigo-500/20' : 'border-slate-800'
                    }`}
                    placeholder="Cuéntanos brevemente qué necesitas..."
                  />
                </div>

                <button className="w-full group bg-white text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-500 hover:text-white transition-all duration-300">
                  Enviar Mensaje
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </div>
        
        {/* Footer sutil */}
        <div className="mt-24 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs font-mono">
          <p>© 2026 RUNTIME_FRONTEND_AGENCY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">GITHUB</a>
            <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
            <a href="#" className="hover:text-white transition-colors">X.COM</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;