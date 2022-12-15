"use strict";
class Thruster {
    constructor() {
        this.isFired = false;
    }
    fireThruster() {
        return this.isFired = !this.isFired;
    }
}
