"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rocket = void 0;
const commandModule_1 = require("./commandModule");
class Rocket {
    constructor(stageOne, stageTwo) {
        this.commandModule = new commandModule_1.CommandModule();
        if (stageOne) {
            this.stageOne = stageOne;
        }
        if (stageTwo) {
            this.stageTwo = stageTwo;
        }
    }
    checkForStageOne() {
        return this.stageOne !== undefined;
    }
    checkForStageTwo() {
        return this.stageTwo !== undefined;
    }
}
exports.Rocket = Rocket;
