import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MyClass } from './decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = environment.API_KEY;
  cols = 5;
  change = true

  class: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.class = new MyClass();
    setTimeout(() => {
      this.change = false;
    }, 1000);
  }


  onEmit(name:string) {
    console.log(name)
  }
}
