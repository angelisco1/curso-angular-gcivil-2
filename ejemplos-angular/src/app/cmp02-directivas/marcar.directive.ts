import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective {
  @HostBinding('style.backgroundColor') color: string = 'white'
  @Input('appMarcar') colorFondo: string = ''

  constructor() {
    console.log('constructor: ', this.colorFondo)
  }

  ngOnInit() {
    if (!this.colorFondo) {
      this.colorFondo = 'yellow'
    }
    console.log('ngOnInit: ', this.colorFondo)
  }

  @HostListener('mouseover') onMouseOver() {
    // console.log('Pasa por aquí')
    this.color = this.colorFondo
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = 'white'
  }

}
