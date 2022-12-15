import { CommandModule } from "./commandModule";
import { Stage } from "./stage";


export class Rocket{

    commandModule:CommandModule = new CommandModule();
    stageOne?:Stage;
    stageTwo?:Stage;

    constructor(stageOne:Stage | undefined, stageTwo:Stage | undefined){

        if(stageOne){
            this.stageOne = stageOne;
        }

        if(stageTwo){
            this.stageTwo = stageTwo;
        }
    }

    checkForStageOne():boolean{
        return this.stageOne !== undefined 
    }

    checkForStageTwo():boolean{
        return this.stageTwo !== undefined 
    }
}