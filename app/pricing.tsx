import React from 'react';
import { Check, Terminal } from 'lucide-react'; // Asumiendo que usas lucide-react

const plans = [
  {
    name: "Desarrollo Frontend",
    price: "Core Stack",
    description: "Creación de interfaces de usuario altamente interactivas, rápidas y visualmente atractivas.",
    features: ["Desarrollo con React y Next.js", "Estilado avanzado con Tailwind CSS", "Diseño Responsive", "Optimización de Core Web Vitals."],
    highlight: false
  },
  {
    name: "Lógica de Aplicación y API.",
    price: "Advance Logic",
    description: "Implementación de la lógica de negocio y conexión eficiente entre el cliente y el servidor.",
    features: ["Arquitectura de componentes escalables.", "Consumo y gestión de APIs REST.", "Manejo de estados complejos", "Despliegue continuo con CI/CD en Vercel/GitHub."],
    highlight: false
  },
  {
    name: "IA & Automatización",
    price: "AI Integration",
    description: "Automatización de procesos y aplicación de modelos de aprendizaje automático para el análisis de datos.",
    features: ["Scripts de automatización en Python.", "Modelos de Machine Learning", "Procesamiento de datos con Pandas/NumPy.", "Integración de modelos de IA en aplicaciones web."],
    highlight: false
  }
];

const Maintenance = () => {
  return (
    <section id='mantenimiento' className="py-24 bg-[#020617] border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-indigo-500 uppercase tracking-[0.3em] mb-4">
            // Support_Plans
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Mantenimiento de alto rendimiento.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-8 rounded-2xl border transition-all duration-300 group ${
                plan.highlight 
                  ? 'bg-slate-900/50 border-indigo-500/50 shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)]' 
                  : 'bg-transparent border-slate-800 hover:border-slate-700'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <div className="flex items-center gap-3 mb-6">
                <Terminal size={18} className="text-indigo-500" />
                <h4 className="text-xl font-bold text-white">{plan.name}</h4>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">€{plan.price}</span>
                <span className="text-slate-500 text-sm">/mes</span>
              </div>

              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check size={16} className="text-indigo-500 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                plan.highlight 
                  ? 'bg-indigo-500 hover:bg-indigo-400 text-white' 
                  : 'bg-slate-800 hover:bg-slate-700 text-white'
              }`}>
                Contactar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Maintenance;