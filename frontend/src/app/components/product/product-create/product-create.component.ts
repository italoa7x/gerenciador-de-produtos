import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  produto: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  salvar(): void {
    this.productService.storage(this.produto).subscribe( () => {
      this.productService.showSnackBar('Produto criado.');
      this.router.navigate(['/products']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/products'])
  }

}
