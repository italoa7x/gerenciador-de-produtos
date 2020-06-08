import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './texto-rodape.component.html',
  styleUrls: ['./texto-rodape.component.css']
})
export class TextoRodapeComponent implements OnInit {

  constructor() { }
  
  nomeDev: string = "Italo Alves";

  ngOnInit(): void {
  }
}
