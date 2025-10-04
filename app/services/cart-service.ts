import { computed, Injectable, signal } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = signal<CartItem[]>([]);

  total = computed(() =>
    this.cart().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  cartItems = this.cart.asReadonly();

  addToCart(product: CartItem) {
    const current = this.cart();
    const existing = current.find(i => i.id === product.id);

    if (existing) {
      const updated = current.map(i =>
        i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      this.cart.set(updated);
    } else {
      this.cart.set([...current, { ...product, quantity: 1 }]);
    }
  }

  removeFromCart(id: number) {
    this.cart.set(this.cart().filter(item => item.id !== id));
  }

  clearCart() {
    this.cart.set([]);
  }
}
