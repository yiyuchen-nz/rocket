"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
const stage_1 = require("./stage");
const rocket_1 = require("./rocket");
const myFirstStage = new stage_1.Stage();
const mySecondStage = new stage_1.Stage();
const myFirstRocket = new rocket_1.Rocket(myFirstStage, mySecondStage);
if (myFirstRocket.checkForStageOne()) {
    (_a = myFirstRocket.stageOne) === null || _a === void 0 ? void 0 : _a.addEngine(5);
    (_b = myFirstRocket.stageOne) === null || _b === void 0 ? void 0 : _b.addFuelToTank(6666);
}
if (myFirstRocket.checkForStageTwo()) {
    (_c = myFirstRocket.stageTwo) === null || _c === void 0 ? void 0 : _c.addEngine(3);
    (_d = myFirstRocket.stageTwo) === null || _d === void 0 ? void 0 : _d.addFuelToTank(9988);
}
//start engines on s1
//turn emgines on 1 off
// detatch s1
//start emgines on s2
//yutn engines on 2 off
// detach s2
// turn on engines on CM
// turn off engines on CM
//deply parachute
