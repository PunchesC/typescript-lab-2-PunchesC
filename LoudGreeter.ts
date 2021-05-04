import {Greeter} from "./index"

export class LoudGreeter extends Greeter{
 private extra: string = "!";

addVolume(): void{
    this.extra += "!";
}
greet(name:string):string{
  // return this.greeting+ ", " + name+ "!"+this.extra;
  return super.greet(name)+ this.extra;
}

}
// return super.greet(name)+ this.extra;