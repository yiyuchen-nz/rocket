import { MainEngine } from "./mainEngine"
import { FuelTank } from "./fuelTank"
import { Parachute } from "./parachute";

export class CommandModule {
    private MainEngine: MainEngine = new MainEngine();
    private fuelTank: FuelTank = new FuelTank();
    private parachute:Parachute = new Parachute()
    

    seperateStageOne(){
        console.log("Stage one detached")
    }

    separateStageTwo(){

        console.log("Stage two detached")
    }

    deployParachute():boolean{
        return this.parachute.deployParachute()
    }

}