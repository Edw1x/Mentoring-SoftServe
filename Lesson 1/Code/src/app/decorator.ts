function ClassDecorator(obj: any) {
 return function(target: any) {
  Object.defineProperty(target.prototype, 'name', {
    value: obj.name
  })

  Object.defineProperty(target.prototype, 'age', {
    value: obj.age
  })
 }
}

@ClassDecorator({
  name: 'Pasha',
  age: 22
})
export class MyClass {
  constructor(){
    console.log((this as any).name, (this as any).age);
  }
}
