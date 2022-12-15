"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stage = void 0;
const engine_1 = require("./engine");
const fuelTank_1 = require("./fuelTank");
class Stage {
    constructor() {
        this.Engine = new engine_1.Engine();
        this.FuelTank = new fuelTank_1.FuelTank();
        this.engines = [];
    }
    addEngine(quan) {
        for (let i = 0; i < quan; i++) {
            this.engines.push(new engine_1.Engine());
        }
    }
    getNumberOfEngines() {
        return this.engines.length;
    }
    addFuelToTank(amountOfFuel) {
        return this.FuelTank.addFuel(amountOfFuel);
    }
}
exports.Stage = Stage;
