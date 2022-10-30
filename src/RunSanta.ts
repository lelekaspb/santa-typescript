import { Bag } from "./Bag";
import { BagType } from "./BagType";
import { Present } from "./Present";
import { PresentType } from "./PresentType";
import { Santa } from "./Santa";
import { Sled } from "./Sled";

const DrewSanta = new Santa("Drew", 51);
const DrewSled = new Sled(DrewSanta);
const DrewBag = new Bag(25, BagType.Paper);
const TruckPresent = new Present("Truck Toy", 8, PresentType.Hard);
const TeddyBearPresent = new Present("Teddy Bear", 3, PresentType.Soft);
const NewPresent = new Present("Another present", 4, PresentType.Soft);
const TrainPresent = new Present("Train Toy", 8, PresentType.Hard);
DrewBag.addPresent(TruckPresent);
DrewBag.addPresent(TeddyBearPresent);
DrewSled.addBag(DrewBag);

// checking and printing
//DrewSled.print();

DrewSled.addPresentAndNewBagIfNeeded(TeddyBearPresent);
DrewSled.addPresentAndNewBagIfNeeded(NewPresent);
DrewSled.addPresentAndNewBagIfNeeded(TrainPresent);

DrewSled.print();
