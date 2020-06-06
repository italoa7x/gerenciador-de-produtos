import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: any = {
    id: 0,
    name: '',
    price: 0.0
  }

  constructor() { }
  
  nomeDev: string = "Italo Alves";

  ngOnInit(): void {
  }

  salvar(){

  }

}
