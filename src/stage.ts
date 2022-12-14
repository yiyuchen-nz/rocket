import { Engine } from "./engine"; 
import { FuelTank } from "./fuelTank";


export class Stage{
    private Engine: Engine = new Engine();
    private FuelTank: FuelTank = new FuelTank();
    
    constructor(){}

    addEngine(quan:number):Engine[]{
        let engines:Engine[]=[]
        for(let i = 0; i < quan; i++){
        engines.push(this.Engine) 
    }
        return engines
    }
    

}

