import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStrDirective]'
})
export class StrDirectiveDirective {

  @Input() appStrDirective:any;

  constructor(private cont: ViewContainerRef, private temp: TemplateRef<any>) { }

  ngOnInit(): void {
    if(this.appStrDirective) {
      this.cont.createEmbeddedView(this.temp);
    } else {
      this.cont.clear();
    }
  }
}
