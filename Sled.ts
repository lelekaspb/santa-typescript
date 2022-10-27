import { Santa } from "./Santa";
import { Bag } from "./Bag";
import { Present } from "./Present";
import { BagType } from "./BagType";

export class Sled {
  santa: Santa;
  bags: Bag[] = [];

  constructor(santa: Santa) {
    this.santa = santa;
  }

  addBag(bag: Bag): void {
    this.bags.push(bag);
  }

  setSanta(santa: Santa): void {
    this.santa = santa;
  }

  addPresentAndNewBagIfNeeded(presentObject: Present): void {
    let newBagIsNeeded: boolean;

    // try to fit the present into one of the existing bags
    this.bags.forEach((bag) => {
      if (bag.addPresent(presentObject)) {
        newBagIsNeeded = false;
        // stop trying if the present was placed in one of the existing bags
        return;
      } else {
        newBagIsNeeded = true;
      }
    });

    if (newBagIsNeeded) {
      const newBag = new Bag(10, BagType.Canvas);
      newBag.addPresent(presentObject);
      this.addBag(newBag);
    }
  }

  print(): void {
    console.log(`This sled belongs to Santa named ${this.santa.name}`);
    this.bags.forEach((bag) => {
      bag.print();
    });
  }
}
