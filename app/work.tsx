const steps = [
  { id: '01', title: 'Arquitectura', desc: 'Diseño de la estructura de datos y componentes.' },
  { id: '02', title: 'Desarrollo Atómico', desc: 'Construcción modular bajo estándares de UI/UX.' },
  { id: '03', title: 'Optimización', desc: 'Refactorización para máxima velocidad y SEO.' },
  { id: '04', title: 'Deploy', desc: 'Lanzamiento automatizado con CI/CD.' }
];

const Workflow = () => {
  return (
    <section id="proceso" className="py-24 bg-[#020617]">
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Línea conectora (Desktop) */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-[1px] bg-slate-800 z-0"></div>
          
          {steps.map((step) => (
            <div key={step.id} className="relative z-10 group">
              <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center mx-auto mb-6 group-hover:border-indigo-500 transition-colors duration-500">
                <span className="text-indigo-400 font-mono text-sm">{step.id}</span>
              </div>
              <h5 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">{step.title}</h5>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;