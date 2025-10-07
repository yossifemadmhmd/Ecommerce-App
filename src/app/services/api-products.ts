import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/i-product';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiProducts {
  constructor(private httpClient:HttpClient){}
  fetchProducts():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`./assets/db.json`);
  }
}
