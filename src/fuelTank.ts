export class FuelTank{
    private capacity: number = 10000

    private fuelLevel: number = 0

    constructor(){

    }

    addFuel(amount:number):number{
        if(amount+ this.fuelLevel<this.capacity){
            this.fuelLevel += amount;
            return this.fuelLevel 
        }
        else{
            return this.fuelLevel
        }
    }

    getFuelLevel(): number{
        return this.fuelLevel
    }
}