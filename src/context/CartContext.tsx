import React, { createContext, useContext, useState } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: number; 
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: any) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = (product: any) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id);
      if (existingItem) {
        return currentItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      
      const numericPrice = parseFloat(product.price.replace('S/.', '').trim());
      
      return [...currentItems, { 
        id: product.id, 
        name: product.name, 
        price: numericPrice, 
        image: product.image, 
        quantity: 1 
      }];
    });
    setIsCartOpen(true);
  };

  const removeItem = (id: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      removeItem(id);
      return;
    }
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      isCartOpen,
      setIsCartOpen,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
