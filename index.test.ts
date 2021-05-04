import {Greeter} from "./index"

describe("Greeter", function(){
  test("initial values are set from constructor param", () =>{
    let newGreeter: Greeter = new Greeter("Hello");
    expect(newGreeter.greeting).toBe("Hello")
  });

  test("Test name greet Hello, Olivia!", () =>{
    let newGreeter: Greeter = new Greeter("Hello");
    let result: string = newGreeter.greet("Olivia")
    expect(result).toBe("Hello, Olivia!");
  });

  test("Test name greet Hola, Curtis!", () =>{
    let newGreeter: Greeter = new Greeter("Hola");
    let result: string = newGreeter.greet("Curtis")
    expect(result).toBe("Hola, Curtis!");
  });
});