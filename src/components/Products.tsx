const products = [
  {
    id: 3,
    name: 'Limpiador de Vidrios',
    scent: 'Menta & Vetiver',
    price: 'S/. 32.00',
    image: '/vidrios.png',
    tags: ['Producto Estrella'],
    containerClass: 'md:row-span-2 flex flex-col',
    imageBoxClass: 'flex-1'
  },
  {
    id: 1,
    name: 'Limpiador Multiusos',
    scent: 'Pino Andino & Romero',
    price: 'S/. 35.00',
    image: '/limpiador.png',
    tags: ['Más vendido'],
    containerClass: 'flex flex-col',
    imageBoxClass: 'flex-1'
  },
  {
    id: 2,
    name: 'Jabón Líquido para Platos',
    scent: 'Limón Sutil & Eucalipto',
    price: 'S/. 28.00',
    image: '/jabon.png',
    containerClass: 'flex flex-col',
    imageBoxClass: 'flex-1'
  },
  {
    id: 4,
    name: 'Detergente Concentrado',
    scent: 'Lavanda & Cedro',
    price: 'S/. 45.00',
    image: '/detergente.png',
    tags: ['Nuevo'],
    containerClass: 'md:col-span-2 flex flex-col',
    imageBoxClass: 'flex-1'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-brand-green mb-6">
              Nuestros Esenciales
            </h2>
            <p className="text-lg text-brand-green/70">
              Crea un santuario en tu hogar con nuestra línea completa de productos de limpieza, 
              diseñados para proteger y aromatizar naturalmente.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center text-brand-green font-medium hover:text-brand-gold transition-colors">
            Ver colección completa &rarr;
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className={`group cursor-pointer ${product.containerClass}`}>
              <div className={`relative bg-white rounded-[2rem] overflow-hidden mb-6 ${product.imageBoxClass}`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {product.tags && (
                  <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                    {product.tags.map(tag => (
                      <span key={tag} className="bg-white/90 backdrop-blur-sm text-brand-green px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-center shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="absolute inset-0 bg-brand-green opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-brand-green mb-1">{product.name}</h3>
                <p className="text-sm text-brand-green/60 mb-3">{product.scent}</p>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-brand-green">{product.price}</span>
                  <button className="text-sm font-medium text-brand-gold hover:text-brand-green transition-colors">
                    + Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center text-brand-green font-medium hover:text-brand-gold transition-colors">
            Ver colección completa &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
