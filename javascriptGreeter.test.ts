
import {JavaScriptGreeter} from "./javascriptGreeter"

describe("JavaScriptGreeter", function(){
  test("initial values are set from constructor param", () =>{
    let JSGreeter: JavaScriptGreeter = new JavaScriptGreeter("Hello");
    let result: string = JSGreeter.greet("John") 
    expect(result).toBe("console.log('Hello, John!')")
  });

  test("initial values are set from constructor param", () =>{
    let JSGreeter: JavaScriptGreeter = new JavaScriptGreeter("Hola");
    let result: string = JSGreeter.greet("Joan") 
    expect(result).toBe("console.log('Hola, Joan!')")
  });

  test("initial values are set from constructor param", () =>{
    let JSGreeter: JavaScriptGreeter = new JavaScriptGreeter("Bonjour");
    let result: string = JSGreeter.greet("Pippin") 
    expect(result).toBe("console.log('Bonjour, Pippin!')")
  });

});
