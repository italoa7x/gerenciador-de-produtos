import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products: Product[];
  displayedColumns = ['id', 'name', 'price'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.index().subscribe(p => {
      this.products = p;
    });
  }

}
