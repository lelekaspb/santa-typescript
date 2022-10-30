export class Santa {
  name: string;
  age: number;

  constructor(santaName: string, santaAge: number) {
    (this.name = santaName), (this.age = santaAge);
  }
}
