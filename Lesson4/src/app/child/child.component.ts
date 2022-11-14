import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() isCar!: boolean;
  @Output() eventE = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.eventE.emit(5)
  }

}
