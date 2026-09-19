import { Directive, ElementRef, Host, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

// method 1 : using ElementRef

  // ElementRef : nativeElement (property)
  // constructor(private elementRef:ElementRef) { }

  // ngOnInit(){
  //   this.elementRef.nativeElement.style.backgroundColor = 'blue';
  //   this.elementRef.nativeElement.style.color = 'red';
  //   this.elementRef.nativeElement.style.fontWeight = 'bold';
  // }

// method 2 : using HostBinding

  @HostBinding('style.backgroundColor') bgColor!:string;
  @HostBinding('style.color') color!:string;
  @HostBinding('style.fontWeight') fontWeight!:string;

  ngOnInit(){
    this.bgColor='blue';
    this.color='white';
    this.fontWeight='bold';
  }

// method 3 : using HostListener

  @HostListener('mouseenter') onMouseEnter(){
    this.bgColor='red';
    this.color='white';
    this.fontWeight='bold';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.bgColor='blue';
    this.color='white';
    this.fontWeight='bold';
  }

}
