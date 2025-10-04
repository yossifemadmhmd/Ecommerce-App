import { Component, OnInit, signal } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { CommonModule, NgFor } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cart',
  imports: [CommonModule,NgFor],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart{
  constructor(public cartService: CartService){}

    removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }

  checkout(): void {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Checkout successful 🎉',
      showConfirmButton: true,
      timer: 2000,
      timerProgressBar: true,
    });

        this.cartService.clearCart();
  }
}

