import { Droplets, Flame, Zap, Check } from "lucide-react"

export default function Services() {
  const serviceList = [
    {
      title: "Chauffage Central",
      icon: <Flame size={32} />,
      desc: "Installation de chaudières gaz/mazout, entretien annuel obligatoire et mise en conformité.",
      features: ["Placement chaudière", "Radiateurs", "Chauffage au sol"]
    },
    {
      title: "Plomberie Pro",
      icon: <Droplets size={32} />,
      desc: "Rénovation de salle de bain de A à Z, installation sanitaire et traitement de l'eau.",
      features: ["Sanitaires", "Adoucisseurs", "Robinetterie"]
    },
    {
      title: "Dépannage Urgent",
      icon: <Zap size={32} />,
      desc: "Réparation rapide de fuites, débouchage et pannes de chauffage à Mouscron.",
      features: ["Intervention 24h", "Diagnostic précis", "Réparation durable"]
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 italic">Nos <span className="text-blue-600 underline decoration-blue-200">Services</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Qualité artisanale combinée aux technologies modernes pour un confort optimal.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {serviceList.map((item, index) => (
            <div key={index} className="group p-10 bg-slate-50 rounded-[2rem] hover:bg-white border border-transparent hover:border-blue-100 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{item.desc}</p>
              <ul className="space-y-3">
                {item.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-500 font-medium">
                    <Check size={16} className="text-blue-600" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA BOX */}
<div className="mt-20 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-3xl shadow-blue-900/20">
  <div className="relative z-10">
    <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
      Prêt à démarrer votre projet ?
    </h3>
    <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto">
      Obtenez un devis clair et détaillé sans engagement. Notre équipe vous recontacte dans les 24h.
    </p>
    
    {/* AANGEPASTE LINK NAAR EMAIL */}
    <a 
      href="mailto:Atcs.chauffage@outlook.com?subject=Demande de devis gratuit - Site Web" 
      className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-blue-500 transition shadow-xl inline-block"
    >
      Demander un devis gratuit
    </a>
  </div>
  
  {/* Decoratieve achtergrond elementen */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-10 -mr-20 -mt-20"></div>
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-10 -ml-20 -mb-20"></div>
</div>
      </div>
    </section>
  )
}