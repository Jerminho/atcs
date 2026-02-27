export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 font-medium tracking-tight uppercase text-xs">
          © {new Date().getFullYear()} ATCS Chauffage SRL - Entreprise agréée à Mouscron
        </p>
        <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-slate-900">
           <span>Plomberie</span>
           <span>Chauffage</span>
           <span>Sanitaire</span>
        </div>
      </div>
    </footer>
  )
}