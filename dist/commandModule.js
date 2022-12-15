"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandModule = void 0;
const mainEngine_1 = require("./mainEngine");
const fuelTank_1 = require("./fuelTank");
const parachute_1 = require("./parachute");
class CommandModule {
    constructor() {
        this.MainEngine = new mainEngine_1.MainEngine();
        this.fuelTank = new fuelTank_1.FuelTank();
        this.parachute = new parachute_1.Parachute();
    }
    seperateStageOne() {
        console.log("Stage one detached");
    }
    separateStageTwo() {
        console.log("Stage two detached");
    }
    deployParachute() {
        return this.parachute.deployParachute();
    }
}
exports.CommandModule = CommandModule;
