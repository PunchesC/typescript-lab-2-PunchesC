//name , jersey
export class Player {
  // name:string;DONT need to specify
  // jersey: number;
  constructor(public name:string, public jersey: number){
    // this.name = name; DONT NEED WITH THE PUBLIC KEY WORD
    // this.jersey = jersey; Can also be used with private etc..
  }
describe():string{
  return `${this.name} wears ${this.jersey}` 
}
}
//+team(string)
export class TeamPlayer extends Player{

  team: string;
  constructor (name: string,jersey:number,team:string){
    super(name, jersey)
    this.team = team;

  }
  describe():string{
    return super.describe() + ` and plays for ${this.team}` 
  }
}