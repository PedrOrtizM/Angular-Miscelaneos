import { Directive, Input , ElementRef,HostListener , Output} from '@angular/core';

@Directive({
  selector: 'button[counting]'
})
export class NumClickDirective {
  numberOfClicks = 2;

  @Output('')

  @HostListener('click', ['$event.target'])
  onClick(btn) {
     this.numberOfClicks++;
    console.log('button', btn, 'number of clicks:',this.numberOfClicks);
 }
  constructor() { }

}
