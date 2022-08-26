import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';


@Directive({
  selector: '[appAttrDirective]'
})
export class AttrDirectiveDirective {

  @Input() condition: any;
  @Output() emitter = new EventEmitter();

  constructor(private element: ElementRef) { }

  @HostListener('click', ['$event.target']) onClick() {
    console.log('you clicked')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('i am ngOnInit')
    if(this.condition) {
      this.element.nativeElement.style.backgroundColor = 'black'
    } else {
      this.element.nativeElement.style.backgroundColor = 'green'
    }

    this.emitter.emit('pasha');
  }
}
