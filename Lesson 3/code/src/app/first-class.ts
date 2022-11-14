

export class FirstClass {
  array = [1,2,3,4,5]

  constructor() {}

  onPush(number: number) {
    this.array.push(number);
  }


  sayHi() {
    console.log('HI')
  }
}
