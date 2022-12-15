export class Engine{
    private isOn: boolean = false

    constructor() {
    }

    engineIsOn():boolean{
        return this.isOn =!this.isOn}

    engineSaysHi():void{
        console.log("hellooo from engine")
    }

    fireEngine(engineNumber:number):void{

        console.log(`engine number ${engineNumber} firing`)
        this.isOn = true
    }

    stopEngine(engineNumber:number):void{
        console.log(`stopping engine ${engineNumber} stoping`)
        this.isOn = false;
    }


}
