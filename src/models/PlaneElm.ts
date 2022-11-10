import Container from "../core/Container";
import Plane from "./Plane";
// PlaneElm
export default class TankElm {
    container: Container;
    fps: any;
    plane: Plane;
    constructor(option) {
        this.container = new Container({
            x: option.x,
            y: option.y,
            w: option.w,
            h: option.h,
            zindex: 10000
        });

        this.plane = new Plane({
            w: 60,
            h: 60
        })

        this.container.add(this.plane)
    }
    setTankAngle(angle) {
        this.plane.setAngle(angle)
    }
}
