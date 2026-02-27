import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Phone } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black italic">A</div>
          <span className="text-xl font-black text-slate-900 tracking-tight uppercase">
            ATCS<span className="text-blue-600">Chauffage</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className="text-slate-600 hover:text-blue-600 font-semibold transition">Accueil</Link>
          <Link to="/services" className="text-slate-600 hover:text-blue-600 font-semibold transition">Services</Link>
          <Link to="/contact" className="text-slate-600 hover:text-blue-600 font-semibold transition">Contact</Link>
          <a href="tel:0471796657" className="bg-blue-600 text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-200">
            <Phone size={18} /> <span className="font-bold">Urgence</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden p-2 text-slate-900 z-50 transition-transform active:scale-90" 
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- SMOOTH MOBILE MENU --- */}
      <div className={`
        md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl flex flex-col p-6 space-y-4
        transition-all duration-300 ease-in-out origin-top
        ${open ? 'opacity-100 translate-y-0 scale-y-100' : 'opacity-0 -translate-y-4 scale-y-95 pointer-events-none'}
      `}>
        <Link 
          to="/" 
          onClick={() => setOpen(false)} 
          className="text-lg font-bold text-slate-800 hover:text-blue-600 transition"
        >
          Accueil
        </Link>
        <Link 
          to="/services" 
          onClick={() => setOpen(false)} 
          className="text-lg font-bold text-slate-800 hover:text-blue-600 transition"
        >
          Services
        </Link>
        <Link 
          to="/contact" 
          onClick={() => setOpen(false)} 
          className="text-lg font-bold text-slate-800 hover:text-blue-600 transition"
        >
          Contact
        </Link>
        <div className="pt-4 border-t border-gray-50">
          <a 
            href="tel:0471796657" 
            className="w-full inline-block text-center bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-100 active:bg-blue-700 transition"
          >
            Appeler 0471 79 66 57
          </a>
        </div>
      </div>
    </nav>
  )
}