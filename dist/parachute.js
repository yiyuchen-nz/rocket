"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parachute = void 0;
class Parachute {
    constructor() {
        this.isDeployed = false;
    }
    deployParachute() {
        return this.isDeployed = !this.isDeployed;
    }
}
exports.Parachute = Parachute;
