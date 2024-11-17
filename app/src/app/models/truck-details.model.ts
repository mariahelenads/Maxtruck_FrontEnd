import { Bridge } from "./bridge.model";
import { Truck } from "./truck.model";

export class TruckDetails extends Truck {
    criticalBridges:Bridge[] = []
}