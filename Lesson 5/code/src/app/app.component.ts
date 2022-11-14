import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private viewPortScroller: ViewportScroller) {

  }

  onClick() {
    this.router.navigate(['home'])
  }

  onMoveToDiv2() {
    this.viewPortScroller.scrollToAnchor('anchor');
  }

  onMoveToDiv2Temp($event: any){
    $event.scrollIntoView({behavior: 'smooth'});
  }

  title = 'code';
}
