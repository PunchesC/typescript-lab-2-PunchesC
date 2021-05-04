import {LoudGreeter} from "./LoudGreeter"
describe("LoudGreeter", function(){
  test("initial values are set from constructor param", () =>{
    let loudGreets: LoudGreeter = new LoudGreeter("Hello");
    let result: string = loudGreets.greet("John");

    expect(result).toBe("Hello, John!!")
    
  });


  test("initial values are set from constructor param", () =>{
    let loudGreets: LoudGreeter = new LoudGreeter("Hola");
    let result: string = loudGreets.greet("Randy");

    expect(result).toBe("Hola, Randy!!")
    
  });
  
  test("initial values are set from constructor param", () =>{
    let loudGreets: LoudGreeter = new LoudGreeter("Hola");
    let result: string = loudGreets.greet("Randy");
    loudGreets.addVolume();
    expect(result).toBe("Hola, Randy!!")
    
  });

  test("initial values are set from constructor param", () =>{
    let loudGreets: LoudGreeter = new LoudGreeter("Hello");
    loudGreets.addVolume();
    loudGreets.addVolume();
    
    let result: string = loudGreets.greet("Randy");
    expect(result).toBe("Hello, Randy!!!!")
    
  });

  test("initial values are set from constructor param", () =>{
    let loudGreets: LoudGreeter = new LoudGreeter("Hoya");
    loudGreets.addVolume();
    loudGreets.addVolume();
    loudGreets.addVolume();
    loudGreets.addVolume();
    loudGreets.addVolume();
    loudGreets.addVolume();
    loudGreets.addVolume();
    loudGreets.addVolume();
    loudGreets.addVolume();
    loudGreets.addVolume();
    let result: string = loudGreets.greet("Megan");
    expect(result).toBe("Hoya, Megan!!!!!!!!!!!!")
    
  });
});