"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sled = void 0;
var Bag_1 = require("./Bag");
var BagType_1 = require("./BagType");
var Sled = /** @class */ (function () {
    function Sled(santa) {
        this.bags = [];
        this.santa = santa;
    }
    Sled.prototype.addBag = function (bag) {
        this.bags.push(bag);
    };
    Sled.prototype.setSanta = function (santa) {
        this.santa = santa;
    };
    Sled.prototype.addPresentAndNewBagIfNeeded = function (presentObject) {
        var newBagIsNeeded;
        // try to fit the present into one of the existing bags
        this.bags.forEach(function (bag) {
            if (bag.addPresent(presentObject)) {
                newBagIsNeeded = false;
                // stop trying if the present was placed in one of the existing bags
                return;
            }
            else {
                newBagIsNeeded = true;
            }
        });
        if (newBagIsNeeded) {
            var newBag = new Bag_1.Bag(10, BagType_1.BagType.Canvas);
            newBag.addPresent(presentObject);
            this.addBag(newBag);
        }
    };
    Sled.prototype.print = function () {
        console.log("This sled belongs to Santa named ".concat(this.santa.name));
        this.bags.forEach(function (bag) {
            bag.print();
        });
    };
    return Sled;
}());
exports.Sled = Sled;
//# sourceMappingURL=Sled.js.map