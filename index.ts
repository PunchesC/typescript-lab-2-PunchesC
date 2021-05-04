export class Greeter {
  // greeting: string;
constructor(public greeting:string){
  // this.greeting = greeting;
}
greet(name:string):string{
  return this.greeting+ ", " + name+ "!"
}


}