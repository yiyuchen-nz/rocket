"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainEngine = void 0;
class MainEngine {
    constructor() {
        this.isOn = false;
    }
    mainEngineIsOn() {
        return this.isOn = !this.isOn;
    }
}
exports.MainEngine = MainEngine;
