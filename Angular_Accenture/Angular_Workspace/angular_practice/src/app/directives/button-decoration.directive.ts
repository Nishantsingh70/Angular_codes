import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonDecoration]'
})
export class ButtonDecorationDirective {

  @HostBinding('style.backgroundColor') bgColor: string | undefined;
  @HostBinding('style.color') color: string | undefined;

  // ElementRef : nativeElement (property)
  constructor(private elementRef: ElementRef) { }

  // ngOnInit(){
  //   this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  // }

  ngOnInit(){
    this.bgColor = 'aqua';
    this.color = 'black';
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.bgColor = 'green';
    this.color = 'black';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.bgColor = 'aqua';
    this.color = 'black';
  }
}
