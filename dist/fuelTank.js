"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuelTank = void 0;
class FuelTank {
    constructor() {
        this.capacity = 10000;
        this.fuelLevel = 0;
    }
    addFuel(amount) {
        if (amount + this.fuelLevel < this.capacity) {
            this.fuelLevel += amount;
            return this.fuelLevel;
        }
        else {
            return this.fuelLevel;
        }
    }
    getFuelLevel() {
        return this.fuelLevel;
    }
}
exports.FuelTank = FuelTank;
