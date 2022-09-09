import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @ContentChild('myTemplate', {read: TemplateRef}) temp!: TemplateRef<any>;
  @ContentChild('myTemplateCard', {read: TemplateRef}) tempCard!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {

  }

}
