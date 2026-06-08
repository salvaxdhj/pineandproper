import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-cream">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-brand-beige rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span>Orgullosamente Peruano</span>
            </div>
            <h1 className="font-serif text-5xl lg:text-7xl font-semibold text-brand-green leading-[1.1] tracking-tight mb-6">
              Limpieza natural <br/>
              <span className="text-brand-gold italic">sin compromisos.</span>
            </h1>
            <p className="text-lg text-brand-green/80 mb-8 max-w-xl leading-relaxed">
              Esenciales de limpieza formulados con ingredientes botánicos de los Andes y la Amazonía. 
              Seguro para tu familia, implacable con la suciedad y amable con nuestro planeta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/productos" className="inline-flex justify-center items-center px-8 py-4 bg-brand-green text-white rounded-full font-medium hover:bg-brand-green-light transition-all duration-300 group">
                Descubrir Productos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/nosotros" className="inline-flex justify-center items-center px-8 py-4 bg-transparent border-2 border-brand-green/20 text-brand-green rounded-full font-medium hover:border-brand-green/40 transition-colors">
                Nuestra Historia
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative">
              <img 
                src="/welcome.png" 
                alt="Productos naturales de limpieza" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/40 to-transparent mix-blend-multiply" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl shadow-brand-green/10 border border-brand-cream max-w-xs">
              <p className="font-serif text-2xl text-brand-green font-semibold mb-1">100%</p>
              <p className="text-sm text-brand-green/70">Ingredientes biodegradables y de origen vegetal.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
