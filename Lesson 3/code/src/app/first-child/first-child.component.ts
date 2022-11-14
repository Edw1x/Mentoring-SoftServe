import { Component, Inject, OnInit } from '@angular/core';
import { FirstClass } from '../first-class';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css'],
  providers: []
})
export class FirstChildComponent implements OnInit {


  constructor(private firstService: FirstService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.firstService.onPush(100);
    console.log(this.firstService.array);
  }

}
