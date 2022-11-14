import { APP_INITIALIZER, Component, Inject } from '@angular/core';
import { FirstService } from './first.service';
APP_INITIALIZER
const CONFIG_FILE = {
  name: 'Pavlo',
  age: 32
}

const number_one = 10;

function sayHi(service: FirstService) {
  console.log(service.array)
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirstService,
  {
    provide: 'object_two', useExisting: 'object'
  },
  {
    provide: 'object', useValue: CONFIG_FILE
  }]
})

export class AppComponent {
  title = 'code';

  constructor(private firstService: FirstService, @Inject('object_two') private classObj: any ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.firstService.onPush(10);
    console.log(this.firstService.array)
    console.log(this.classObj)
  }
}
