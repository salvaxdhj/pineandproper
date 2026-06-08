import { Droplets, Sparkles, MapPin, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Droplets,
    title: 'Fórmulas Puras',
    description: 'Sin sulfatos, parabenos, ni fragancias artificiales. Solo extractos de plantas y aceites esenciales.'
  },
  {
    icon: MapPin,
    title: 'Origen Peruano',
    description: 'Ingredientes obtenidos éticamente de comunidades en los Andes y la Amazonía peruana.'
  },
  {
    icon: Sparkles,
    title: 'Poder Natural',
    description: 'Eficacia comprobada contra la grasa y la suciedad, respaldada por el poder de la naturaleza.'
  },
  {
    icon: ShieldCheck,
    title: 'Hogar Seguro',
    description: 'Totalmente seguro para ser usado cerca de niños y mascotas. Tu tranquilidad es nuestra prioridad.'
  }
];

export default function Features() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-brand-green mb-6">
            Eleva tu rutina de limpieza
          </h2>
          <p className="text-lg text-brand-green/70">
            Pine & Proper nace de la creencia de que un hogar limpio no debería requerir químicos agresivos. 
            Hemos embotellado la pureza del paisaje peruano para tu cuidado diario.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-brand-cream/50 p-8 rounded-3xl border border-brand-beige hover:border-brand-gold/30 transition-colors group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-brand-gold group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-brand-green mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-green/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
