import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/products.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private BASE_URL: string = "http://localhost:3000/products"; 

  constructor(private snakBar: MatSnackBar, private httpClient: HttpClient) { }

  showSnackBar(msg: string){
    this.snakBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
    
  }

  storage(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(this.BASE_URL, product);
  }

  index():  Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.BASE_URL);
  }
  
}
