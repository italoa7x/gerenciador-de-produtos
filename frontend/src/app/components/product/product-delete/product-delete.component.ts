import { Product } from './../../../models/products.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  };

  constructor(private router: Router, private productService: ProductService,
    private myRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.myRoute.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe((p) => {
      this.product = p;
    });
  }

  excluir(): void {
    const id = this.myRoute.snapshot.paramMap.get('id');
    this.productService.delete(id).subscribe( () => {
      this.productService.showSnackBar('Produto excluido com sucesso.');
      this.router.navigate(['/products']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/products'])
  }
}
