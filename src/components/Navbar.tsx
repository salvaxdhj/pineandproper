import { Menu, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { items, setIsCartOpen } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed w-full z-50 bg-brand-cream/90 backdrop-blur-sm border-b border-brand-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-28">
          <Link to="/" className="flex items-center -ml-4 md:-ml-8">
            <img src="/logo.png" alt="Pine & Proper Logo" className="h-40 md:h-56 w-auto object-contain -my-12" />
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/nosotros" className="text-brand-green/80 hover:text-brand-green font-medium transition-colors">Nosotros</Link>
            <Link to="/productos" className="text-brand-green/80 hover:text-brand-green font-medium transition-colors">Productos</Link>
            <Link to="/impacto" className="text-brand-green/80 hover:text-brand-green font-medium transition-colors">Impacto</Link>
          </div>

          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative text-brand-green/80 hover:text-brand-green transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button className="md:hidden text-brand-green/80 hover:text-brand-green">
              <Menu className="h-6 w-6" />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="hidden md:inline-flex bg-brand-green text-white px-5 py-2 rounded-full font-medium hover:bg-brand-green-light transition-colors duration-300"
            >
              Ver Carrito
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
