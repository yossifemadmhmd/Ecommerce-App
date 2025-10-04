import { Component, computed, signal } from '@angular/core';
import { IProduct } from '../../interfaces/i-product';
import { ApiProducts } from '../../services/api-products';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  Products = signal<IProduct[]>([]);
  selectedCategory = signal<string>('all');


  constructor(private apiProducts:ApiProducts , private cartService:CartService) {
    this.apiProducts.fetchProducts().subscribe((products: IProduct[])=>{
      console.log(products);
      this.Products.set(products);
    });
  }

  filteredProducts = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') return this.Products();
    return this.Products().filter(p => p.category === category);
  });


    changeCategory(value: string) {
    this.selectedCategory.set(value);
  }

    addToCart(product: IProduct) {
    this.cartService.addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,
      image: product.image
    })


    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: `${product.title} added to cart!`,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  }
}
