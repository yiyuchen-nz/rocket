"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
class Engine {
    constructor() {
        this.isOn = false;
    }
    engineIsOn() {
        return this.isOn = !this.isOn;
    }
    engineSaysHi() {
        console.log("hellooo from engine");
    }
    fireEngine(engineNumber) {
        console.log(`engine number ${engineNumber} firing`);
        this.isOn = true;
    }
    stopEngine(engineNumber) {
        console.log(`stopping engine ${engineNumber} stoping`);
        this.isOn = false;
    }
}
exports.Engine = Engine;
