import { Component, Inject, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css'],
  providers: []
})
export class SecondChildComponent implements OnInit {

  constructor(private firstService: FirstService) {}

  ngOnInit(): void {
    this.firstService.onPush(200);
    console.log(this.firstService.array);
  }
}
