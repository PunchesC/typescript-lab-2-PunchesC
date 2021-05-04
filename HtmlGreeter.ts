import {Greeter} from "./index"

export class htmlGreeter extends Greeter{
 
  constructor(public greeting:string, public tagName: string = "h1"){
    super(greeting);
    this.tagName = tagName;
  }
  greet(name:string):string{
    // return this.tagName+this.greeting+", "+name+"!"+this.tagName;
    return `<${this.tagName}>${this.greeting}, ${name}!</${this.tagName}>`;
   }
}