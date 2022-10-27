import { PresentType } from "./PresentType";

export class Present {
  name: string;
  weight: number;
  type: PresentType;

  constructor(
    presentName: string,
    presentWeight: number,
    presentType: PresentType
  ) {
    (this.name = presentName),
      (this.weight = presentWeight),
      (this.type = presentType);
  }

  getPresentType(): PresentType {
    return this.type;
  }

  getPresentWeight(): number {
    return this.weight;
  }

  print(): void {
    console.log(
      `  Present name is ${this.name}, weight is ${this.weight}, type is ${this.type}`
    );
  }
}
