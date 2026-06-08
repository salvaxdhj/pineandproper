import { Instagram, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4 -ml-8">
              <img src="/logo.png" alt="Pine & Proper Logo" className="h-48 md:h-64 w-auto filter brightness-0 invert object-contain origin-left -my-16" />
            </Link>
            <p className="mb-6 max-w-sm">
              Esenciales de limpieza naturales, inspirados y elaborados en el corazón de Perú.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-brand-gold transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-white/60 hover:text-brand-gold transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Comprar</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Limpiadores Multiusos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cuidado de Ropa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Platos & Cocina</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sets y Kits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Compañía</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Nuestra Historia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ingredientes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Impacto Ambiental</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Mantente en Contacto</h4>
            <p className="text-sm mb-4">
              Suscríbete para recibir consejos de cuidado del hogar y un 10% de descuento en tu primer pedido.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="bg-white/10 border border-white/20 rounded-full px-4 py-2 w-full text-white placeholder:text-white/40 focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button 
                type="submit"
                className="bg-brand-gold text-brand-green px-4 py-2 rounded-full font-medium hover:bg-white transition-colors flex items-center justify-center"
              >
                <Mail className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Pine & Proper. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Envíos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
