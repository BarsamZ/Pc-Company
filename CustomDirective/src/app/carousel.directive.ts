import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ICaroouselContext } from './interfaces/app-interface';

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit {

  context!: ICaroouselContext; 
  index: number =0;
  length: number | undefined;

  constructor(private templateRef: TemplateRef<ICaroouselContext>,
    private viewContainerRef: ViewContainerRef) { }

  @Input('appCarouselFrom')
  images!: string[];
 
    timer: string | number | NodeJS.Timeout | undefined;
    
    @Input('appCarouselAuto')
    set autoplay(val: string){
      val ==='No' ? this.clearAutoPlay() : this.playAutoPlay()
    }

  public ngOnInit() {
  this.context = {
      $implicit: this.images[0],
      controller: {
        next: ()=> this.next(),
        prev: ()=> this.prev()
      }
    }


    this.viewContainerRef.createEmbeddedView(this.templateRef,this.context);
  }

  public next() {
    this.index++;
    if (this.index >= this.images.length ) {
      this.index = 0;
    }
    this.context.$implicit = this.images[this.index];
  }
  public prev(){
    this.index--;
    if (this.index < 0) {
      this.index = this.images.length - 1;
      
    }
    this.context.$implicit = this.images[this.index];
  }

public playAutoPlay(){
  this.timer = setInterval(() =>{
    this.next();
  }, 1000); 
}
 public clearAutoPlay(){
  clearInterval(this.timer);
 }
}
