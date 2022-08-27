import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorful]'
})
export class ColorfulDirective {

  availableColor =['#847EB1', '#5B5393', '#3A3276', '#201858' , '#88CC88', '#55AA55', '#2D882D' , '#116611'];

@HostBinding('style.color')  color: string | undefined ;
@HostBinding('style.border-color') borderColor: string | undefined;
@HostListener('keydown') newColor() {
  const randomColorIndex = Math.floor(Math.random() * this.availableColor.length);
this.color = this.borderColor = this.availableColor[randomColorIndex];
}

}
