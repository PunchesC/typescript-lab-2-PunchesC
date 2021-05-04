import {htmlGreeter} from "./HtmlGreeter"
describe("HtmlGreeter", function(){
  test("Grant no second paramater", () =>{
    let Greets: htmlGreeter = new htmlGreeter("Hello");
    let result: string = Greets.greet("Grant");

    expect(result).toBe("<h1>Hello, Grant!</h1>")
    
  });

  test("Charlie <h2>", () =>{
    let Greets: htmlGreeter = new htmlGreeter("Hello", "h2");
    let result: string = Greets.greet("Charlie");

    expect(result).toBe("<h2>Hello, Charlie!</h2>")
    
  });

  test("Charlie <h2>", () =>{
    let Greets: htmlGreeter = new htmlGreeter("Hi", "p");
    let result: string = Greets.greet("Mitzi");

    expect(result).toBe("<p>Hi, Mitzi!</p>")
    
  });
});
