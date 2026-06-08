import { Globe2, Recycle, TreePine, Droplet, Users } from 'lucide-react';

export default function Impact() {
  return (
    <main className="pt-20">
      <div className="bg-brand-cream py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-serif text-5xl lg:text-6xl font-semibold text-brand-green tracking-tight mb-6">
              Nuestro Compromiso con la Tierra
            </h1>
            <p className="text-lg text-brand-green/80 leading-relaxed">
              En Pine & Proper, la limpieza de tu hogar no cuesta el bienestar del planeta. Creemos que las decisiones cotidianas son el activismo más poderoso.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative">
          <div className="relative aspect-[21/9] bg-brand-beige rounded-[2.5rem] overflow-hidden shadow-sm">
             <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop" 
              alt="Bosque amazónico y naturaleza"
              className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-brand-green/20 mix-blend-multiply" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-green/5">
              <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 text-brand-green">
                <Recycle className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-brand-green mb-4">Empaques Circulares</h3>
              <p className="text-brand-green/70 leading-relaxed">
                Nuestros envases son de plástico 100% reciclado y totalmente reciclables. Además, ofrecemos formatos de recarga que reducen en un 80% el consumo de plástico por hogar.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-green/5">
              <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 text-brand-green">
                <Globe2 className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-brand-green mb-4">Ingredientes Biodegradables</h3>
              <p className="text-brand-green/70 leading-relaxed">
                A diferencia de los limpiadores convencionales, nuestras fórmulas regresan a la naturaleza sin dejar rastros tóxicos en ríos y océanos. Lo que es seguro para tu hogar, es seguro para la Tierra.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-green/5">
              <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 text-brand-green">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-brand-green mb-4">Comercio Justo Peruano</h3>
              <p className="text-brand-green/70 leading-relaxed">
                Trabajamos de la mano con comunidades agrícolas en los Andes y la Amazonía para la obtención de nuestros aceites esenciales, garantizando precios justos y desarrollo local sostenible.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-green/5">
              <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 text-brand-green">
                <Droplet className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-brand-green mb-4">Protección del Agua</h3>
              <p className="text-brand-green/70 leading-relaxed">
                Nuestras fórmulas concentradas requieren menos agua en su producción e invitamos a un uso responsable. Parte de nuestras ganancias apoyan la reforestación de cuencas andinas.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-32 text-center">
            <TreePine className="w-12 h-12 text-brand-gold mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-medium text-brand-green mb-8">
              "No heredamos la Tierra de nuestros ancestros, la tomamos prestada de nuestros hijos."
            </h2>
            <a href="https://www.instagram.com/pineandproperoficial/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-8 py-4 bg-brand-green text-white rounded-full font-medium hover:bg-brand-green-light transition-all duration-300">
              Únete a la comunidad
            </a>
        </div>
      </div>
    </main>
  );
}
