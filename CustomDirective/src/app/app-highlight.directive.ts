import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input ('appAppHighlight')  highlightColor: string = 'yellow';

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundcolor('this.highlightColor');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.changeBackgroundcolor ('transparent');
  }

  private changeBackgroundcolor(color: string) {

    // this.elementRef.nativeElement.style.backgroundColor = color;به هیچ وجه از این روش استفاده نکنید همیشه از رندرر استفاده کنید  
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color',color);
  }
}
