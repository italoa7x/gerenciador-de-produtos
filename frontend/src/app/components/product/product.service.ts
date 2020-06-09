import { Product } from './../../models/products.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private BASE_URL: string = "http://localhost:3000/products"; 

  constructor(private snakBar: MatSnackBar, private httpClient: HttpClient) { }

  showSnackBar(msg: string, isError: boolean = false){
    this.snakBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
    
  }

  storage(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(this.BASE_URL, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  index():  Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.BASE_URL);
  }
  
  readById(id: string): Observable<Product> {
    const url = `${ this.BASE_URL }/${ id }`;
    return this.httpClient.get<Product>(url);
  }

  delete(id: string): Observable<Product>{
    const url = `${this.BASE_URL}/${id}`;
    return this.httpClient.delete<Product>(url);
  }
  
  update(product: Product): Observable<Product> {
    const url = `${ this.BASE_URL }/${ product.id }`;
    return this.httpClient.put<Product>(url, product);
  }

  errorHandler(error: any): Observable<any> {
    this.showSnackBar('Ocorreu um erro!', true);
    return EMPTY;
  }
}
