import { Star, ArrowRight, ShieldCheck } from "lucide-react"
import { Link } from "react-router-dom"

export default function Home() {
  const googleReviewsUrl = "https://www.google.com/search?sca_esv=a46554ff8d764223&rlz=1C1SQJL_nlBE920BE920&biw=1396&bih=663&sxsrf=ANbL-n7enZ-gV7pcwjR7CMp5OhWvbX2FQA:1772203243574&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYv4zeTAPR3KXHS7Wm_fGhyPfMSfNtiRvhxjzn2NzJoLUIOXrbFSczK-XjJe-Xr9Osw27e6vsOeWRQXHERhz5-TfxAExU16GhC9lAERWM90uHLBHsw%3D%3D&q=Atcs+chauffage+srl+-+plombier+Reviews&sa=X&ved=2ahUKEwiyhbbG8_mSAxVa1gIHHbh_FtUQ0bkNegQIIxAF";

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          
          {/* KLIKBARE GOOGLE REVIEWS BADGE */}
          <a 
            href={googleReviewsUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100 mb-8 hover:shadow-md hover:border-blue-300 transition-all duration-300 group animate-fade-in"
          >
            <div className="flex text-orange-400 group-hover:scale-110 transition-transform">
              <Star size={16} fill="currentColor" />
            </div>
            <span className="text-sm font-bold text-slate-700">
              86 avis Google <span className="text-blue-600">★★★★★</span>
            </span>
          </a>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
            Expert <span className="text-blue-600">Chauffagiste</span> & Plombier
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
            Spécialiste agréé pour l'installation, l'entretien et le dépannage rapide. Un service local, fiable et certifié pour votre tranquillité.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services" className="bg-slate-900 text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition shadow-2xl">
              Découvrir nos services <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-5 rounded-2xl font-bold hover:bg-slate-50 transition flex items-center justify-center">
              Nous contacter
            </Link>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-slate-400 font-medium">
             <div className="flex items-center gap-2"><ShieldCheck size={20} className="text-blue-500"/> Agrée</div>
             <div className="flex items-center gap-2"><ShieldCheck size={20} className="text-blue-500"/> Local</div>
             <div className="flex items-center gap-2"><ShieldCheck size={20} className="text-blue-500"/> Garanti</div>
          </div>
        </div>

        {/* RECHTER KANT (IMAGE) */}
        <div className="relative hidden md:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full blur-[120px] opacity-20"></div>
          <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-blue-50 rotate-3 transition-transform hover:rotate-0 duration-500">
             <div className="bg-slate-100 h-[500px] w-full rounded-[2rem] flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80" 
                  alt="Plombier à Mouscron" 
                  className="object-cover h-full w-full opacity-80" 
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}