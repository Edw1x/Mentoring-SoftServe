import { Component, ComponentFactoryResolver, ElementRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('container', {read: ViewContainerRef}) container!: ViewContainerRef;
  @ViewChild('name', {read: TemplateRef}) temp!: TemplateRef<any>;

  constructor(private factResolve: ComponentFactoryResolver) {

  }

  title = 'Lesson2_views';

  ngAfterViewInit(): void {
    //deprecated
    let factory = this.factResolve.resolveComponentFactory(ChildComponent)

    this.container.createComponent(ChildComponent)
  }
}
