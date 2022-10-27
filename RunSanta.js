"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bag_1 = require("./Bag");
var BagType_1 = require("./BagType");
var Present_1 = require("./Present");
var PresentType_1 = require("./PresentType");
var Santa_1 = require("./Santa");
var Sled_1 = require("./Sled");
var DrewSanta = new Santa_1.Santa("Drew", 51);
var DrewSled = new Sled_1.Sled(DrewSanta);
var DrewBag = new Bag_1.Bag(25, BagType_1.BagType.Paper);
var ToyPresent = new Present_1.Present("Truck Toy", 8, PresentType_1.PresentType.Hard);
var TeddyBearPresent = new Present_1.Present("Teddy Bear", 3, PresentType_1.PresentType.Soft);
DrewBag.addPresent(ToyPresent);
DrewBag.addPresent(TeddyBearPresent);
DrewSled.addBag(DrewBag);
// checking and printing
//DrewSled.print();
DrewSled.addPresentAndNewBagIfNeeded(TeddyBearPresent);
DrewSled.print();
//# sourceMappingURL=RunSanta.js.map