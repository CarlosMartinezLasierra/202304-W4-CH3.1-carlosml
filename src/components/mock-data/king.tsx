import Character from "./character";

export default class King implements Character {
  name: string;
  age: number;
  warcry: string;
  family: string[];
  itsalive: boolean;
  kingdom: string;
  reignYears: number;

  constructor(
    name: string,
    age: number,
    warcry: string,
    family: string[],
    itsalive: boolean,
    kingdom: string,
    reignYears: number
  ) {
    this.name = name;
    this.age = age;
    this.warcry = warcry;
    this.family = family;
    this.itsalive = itsalive;
    this.kingdom = kingdom;
    this.reignYears = reignYears;
  }
}
