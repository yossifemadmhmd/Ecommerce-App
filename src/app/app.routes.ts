import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Cart } from './components/cart/cart';
import { About } from './components/about/about';

export const routes: Routes = [
  {path: 'products', component:Products},
  {path: 'cart', component:Cart},
  {path:'about',component:About},
  {path: '', redirectTo: 'products', pathMatch: 'full'}
];
