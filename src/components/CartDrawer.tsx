import { X, Plus, Minus, ShoppingBag, Instagram } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useEffect } from 'react';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, cartTotal } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    if (items.length === 0) return;

    let message = '¡Hola! Me gustaría hacer el siguiente pedido:\n\n';
    items.forEach(item => {
      message += `- ${item.quantity}x ${item.name} (S/. ${(item.price * item.quantity).toFixed(2)})\n`;
    });
    message += `\nTotal: S/. ${cartTotal.toFixed(2)}\n\n¡Gracias!`;

    // Copy to clipboard
    navigator.clipboard.writeText(message).then(() => {
      // Redirect to Instagram
      window.open('https://www.instagram.com/pineandproperoficial/', '_blank');
    }).catch(() => {
      // Fallback if clipboard fails
      window.open('https://www.instagram.com/pineandproperoficial/', '_blank');
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-brand-cream h-full flex flex-col shadow-2xl animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-green/10">
          <div className="flex items-center space-x-2 text-brand-green">
            <ShoppingBag className="w-5 h-5" />
            <span className="font-serif text-xl font-semibold">Tu Carrito</span>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-brand-green/60 hover:text-brand-green hover:bg-brand-green/5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-brand-green/60">
              <ShoppingBag className="w-12 h-12 opacity-50" />
              <p>Tu carrito está vacío</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-brand-green underline hover:text-brand-gold transition-colors"
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-white rounded-lg flex-shrink-0 flex items-center justify-center p-2 border border-brand-green/10">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-medium text-brand-green">{item.name}</h4>
                      <p className="text-brand-green/60 text-sm">S/. {item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-brand-green/20 rounded-full overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-brand-green/60 hover:text-brand-green hover:bg-brand-green/5 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-2 text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-brand-green/60 hover:text-brand-green hover:bg-brand-green/5 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-red-500 hover:text-red-600 transition-colors"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-brand-green/10 p-6 bg-white/50 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-6">
              <span className="text-brand-green/60 font-medium">Total</span>
              <span className="font-serif text-2xl font-semibold text-brand-green">
                S/. {cartTotal.toFixed(2)}
              </span>
            </div>
            
            <div className="space-y-4">
              <div className="bg-brand-gold/10 text-brand-green/80 text-sm p-4 rounded-xl">
                Al hacer clic en el botón, el resumen de tu pedido se copiará y te dirigirá a nuestro Instagram para finalizar la compra.
              </div>
              
              <button 
                onClick={handleCheckout}
                className="w-full py-4 bg-brand-green text-white rounded-full font-medium hover:bg-brand-green-light transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Pedir por Instagram</span>
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
