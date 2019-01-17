import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) {
    console.log("directiva llamada")
   }

   @Input("appResaltado") nuevoColor:string;

   @HostListener('mouseenter')mouseEntro(){
       this.cambiarColor(this.nuevoColor  || "yellow")

   }

   @HostListener('mouseleave')mouseLeave(){
       this.cambiarColor(null)
   }

  private cambiarColor(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}

}
