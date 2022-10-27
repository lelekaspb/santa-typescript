"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Present = void 0;
var Present = /** @class */ (function () {
    function Present(presentName, presentWeight, presentType) {
        (this.name = presentName),
            (this.weight = presentWeight),
            (this.type = presentType);
    }
    Present.prototype.getPresentType = function () {
        return this.type;
    };
    Present.prototype.getPresentWeight = function () {
        return this.weight;
    };
    Present.prototype.print = function () {
        console.log("  Present name is ".concat(this.name, ", weight is ").concat(this.weight, ", type is ").concat(this.type));
    };
    return Present;
}());
exports.Present = Present;
//# sourceMappingURL=Present.js.map