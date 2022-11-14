import { Injectable } from '@angular/core';

@Injectable()
export class FirstService {

  array = [1,2,3,4,5]

  onPush(number: number) {
    this.array.push(number);
  }
}
