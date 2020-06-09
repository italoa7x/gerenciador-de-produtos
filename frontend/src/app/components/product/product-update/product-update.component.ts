import { ProductService } from './../product.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  };

  constructor(private router: Router, private productService: ProductService,
    private myRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.myRoute.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe( (product) => {
      this.product = product;
    });
  }

  atualizar(): void{
    this.productService.update(this.product).subscribe( () => {
      this.productService.showSnackBar('Produto atualizado com sucesso.');
      this.router.navigate(['/products']);
    });
  }

  cancelar(): void{
    this.router.navigate(['/products'])
  }
}
