import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
  <p [style.fontSize.px]="tamano">
  TEXTO
  </p>
  <button class="btn btn-primary" (click)="tamano = tamano+5">
  <i class="fa fa-plus">
  </i>
  </button>

  <button class="btn btn-primary" (click)="tamano = tamano-5">
  <i class="fa fa-minus">
  </i>
  </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

   tamano:number = 40;
   // otra manera de hacerlo. Para agregar mas atributos css se le agrega coma
   // Cuando el atributo tiene guión font-size = fontSize en la otra forma de arriba
   
  // <p [ngStyle]="{'font-size': tamano+'px'}">
  //   esta es una etiqueta
  // </p>
//  <p [style.fontSize]="'60px'">
//<p [style.fontSize.px]="tamano"> .px porque se da en pixeles
  constructor() { }


  ngOnInit() {
  }

}
