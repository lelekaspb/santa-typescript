import { BagType } from "./BagType";
import { Present } from "./Present";
import { PresentType } from "./PresentType";

export class Bag {
  maxWeight: number;
  type: BagType;
  presents: Present[] = [];

  constructor(bagMaxweight: number, bagType: BagType) {
    (this.maxWeight = bagMaxweight), (this.type = bagType);
  }

  addPresent(presentObject: Present): boolean {
    const preliminarySum = this.totalWeight() + presentObject.weight;

    if (preliminarySum <= this.maxWeight) {
      if (
        this.type === BagType.Paper &&
        presentObject.type === PresentType.Soft
      ) {
        return false;
      } else {
        this.presents.push(presentObject);
        return true;
      }
    } else {
      return false;
    }
  }

  totalWeight(): number {
    let sum: number = 0;
    if (this.presents.length > 0) {
      this.presents.forEach((present) => {
        sum += present.weight;
      });
    } else {
      sum = 0;
    }

    return sum;
  }

  print(): void {
    console.log(
      ` This bag has a max weight of ${this.maxWeight} and is of type ${this.type}`
    );
    this.presents.forEach((present) => {
      present.print();
    });
  }
}
