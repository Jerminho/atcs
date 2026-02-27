import { MapPin, Phone, Mail, Facebook, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-12 md:py-24 bg-blue-50/50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          
          {/* Linker Kant: Tekst & Kleine Kaartjes */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 italic uppercase tracking-tight">
              On reste en <span className="text-blue-600">contact</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed">
              Vous avez une urgence ou un projet de rénovation ? Passez nous voir ou contactez-nous directement.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100">
                <MapPin className="text-blue-600 mb-4" size={24} />
                <h4 className="font-bold text-slate-900 mb-2">Adresse</h4>
                <p className="text-sm md:text-base text-slate-500 leading-snug">
                  Gentsesteenweg 114,<br/>7700 Mouscron
                </p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100">
                <Clock className="text-blue-600 mb-4" size={24} />
                <h4 className="font-bold text-slate-900 mb-2">Horaires</h4>
                <p className="text-sm md:text-base text-slate-500 leading-snug">
                  Lun - Ven: 08:00 – 17:00<br/>
                  <span className="text-red-400 italic">Sam - Dim: Fermé</span>
                </p>
              </div>
            </div>
          </div>

          {/* Rechter Kant: Donkere Contact Card */}
          <div className="bg-slate-900 text-white p-8 md:p-14 rounded-[2rem] shadow-2xl relative overflow-hidden">
            <h3 className="text-xl md:text-2xl font-black mb-8 relative z-10">Coordonnées directes</h3>
            
            <div className="space-y-6 md:space-y-8 relative z-10">
              {/* Telefoon */}
              <a href="tel:0471796657" className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition shrink-0">
                  <Phone size={20} className="md:size-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-bold">Appelez-nous</p>
                  <p className="text-lg md:text-xl font-bold italic truncate">0471 79 66 57</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:contact@atcschauffage.be" className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition shrink-0">
                  <Mail size={20} className="md:size-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-bold">E-mail</p>
                  <p className="text-base md:text-xl font-bold italic break-all md:break-normal">contact@atcschauffage.be</p>
                </div>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/atcschauffage/?locale=fr_FR" target="_blank" rel="noreferrer" className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition shrink-0">
                  <Facebook size={20} className="md:size-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-bold">Facebook</p>
                  <p className="text-base md:text-xl font-bold italic underline decoration-blue-500 underline-offset-4">ATCS Chauffage</p>
                </div>
              </a>
            </div>

            {/* Decoratieve achtergrond elementen (alleen zichtbaar op grotere schermen om overlap te voorkomen) */}
            <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-[80px] opacity-20 -mr-16 -mt-16"></div>
          </div>

        </div>
      </div>
    </section>
  )
}