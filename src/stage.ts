import { Engine } from "./engine";
import { FuelTank } from "./fuelTank";

export class Stage {
  private Engine: Engine = new Engine();
  private FuelTank: FuelTank = new FuelTank();
  engines: Engine[] = [];

  constructor() {}

  addEngine(quan: number): void {
    for (let i = 0; i < quan; i++) {
      this.engines.push(new Engine());
    }
  }

  getNumberOfEngines(): number {
    return this.engines.length;
  }

  addFuelToTank(amountOfFuel:number):number{
   return this.FuelTank.addFuel(amountOfFuel);
  }
}
