import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['child-one',5], {relativeTo: this.route, queryParams: {price: 200}});
  }


  get randInt() {
    return Math.random()
  }
}
