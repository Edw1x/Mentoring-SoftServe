import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('snaphot')
    console.log(this.route.snapshot.paramMap.get('id'))
    console.log(this.route.snapshot.queryParams['price'])

    console.log('observalbe')
    this.route.paramMap.subscribe((params)=>{
      console.log(params.get('id'))
      console.log(history.state)
    })

    this.route.queryParams.subscribe((queryParams)=>{
      console.log(queryParams['price'])
    })
  }

}
