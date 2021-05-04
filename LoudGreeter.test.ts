import {LoudGreeter} from "./LoudGreeter"
describe("LoudGreeter", function(){
  test("initial values are set from constructor param", () =>{
    let loudGreets: LoudGreeter = new LoudGreeter("Hello");
    let result: string = loudGreets.greet("John");

    expect(result).toBe("Hello, John!!")
    
  });


  
  test("NO!!!", () =>{
    let loudGreets: LoudGreeter = new LoudGreeter("Hola");
    let result: string = loudGreets.greet("Randy");
   
    expect(result).toBe("Hola, Randy!!")
    
  });

  test("Hello Randy", () =>{
    let loudGreets: LoudGreeter = new LoudGreeter("Hello");
    loudGreets.addVolume();
    loudGreets.addVolume();
    
    let result: string = loudGreets.greet("Randy");
    expect(result).toBe("Hello, Randy!!!!")
    
  });

  test("Megan!!!!!!!!!!!", () =>{
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