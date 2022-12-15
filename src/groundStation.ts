import { Stage } from "./stage";
import { Rocket } from "./rocket";

const myFirstStage = new Stage();

const mySecondStage = new Stage();

const myFirstRocket = new Rocket(myFirstStage, mySecondStage);

if(myFirstRocket.checkForStageOne()){
    myFirstRocket.stageOne?.addEngine(5)
    myFirstRocket.stageOne?.addFuelToTank(6666)
}

if(myFirstRocket.checkForStageTwo()){
    myFirstRocket.stageTwo?.addEngine(3)
    myFirstRocket.stageTwo?.addFuelToTank(9988)
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
