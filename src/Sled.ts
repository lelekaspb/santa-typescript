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
    // try to fit the present into one of the existing bags
    const presentIsAdded = this.bags.find((bag) =>
      bag.addPresent(presentObject)
    );
    if (!presentIsAdded) {
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
