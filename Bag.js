"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bag = void 0;
var BagType_1 = require("./BagType");
var PresentType_1 = require("./PresentType");
var Bag = /** @class */ (function () {
    function Bag(bagMaxweight, bagType) {
        this.presents = [];
        (this.maxWeight = bagMaxweight), (this.type = bagType);
    }
    Bag.prototype.addPresent = function (presentObject) {
        var preliminarySum = this.totalWeight() + presentObject.weight;
        if (preliminarySum <= this.maxWeight) {
            if (this.type === BagType_1.BagType.Paper &&
                presentObject.type === PresentType_1.PresentType.Soft) {
                return false;
            }
            else {
                this.presents.push(presentObject);
                return true;
            }
        }
        else {
            return false;
        }
    };
    Bag.prototype.totalWeight = function () {
        var sum = 0;
        if (this.presents.length > 0) {
            this.presents.forEach(function (present) {
                sum += present.weight;
            });
        }
        else {
            sum = 0;
        }
        return sum;
    };
    Bag.prototype.print = function () {
        console.log(" This bag has a max weight of ".concat(this.maxWeight, " and is of type ").concat(this.type));
        this.presents.forEach(function (present) {
            present.print();
        });
    };
    return Bag;
}());
exports.Bag = Bag;
//# sourceMappingURL=Bag.js.map