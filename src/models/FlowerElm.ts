import Container from "../core/Container";
import Flower2 from "./Flower2";

// 花朵容器，花在容器中间盛开 
export default class FlowerElm {
    container: Container;
    constructor(option) {
        this.container = new Container({
            x: option.x,
            y: option.y,
            w: option.w,
            h: option.h,
            // showBorder: true
        });

        let f2 = new Flower2({
            // 花在container的中心
            offsetX: this.container.w / 2 - (36 / 2),
            offsetY: this.container.h / 2 - (32 / 2),
            w: 36,
            h: 32
        })

        this.container.add(f2)
    }
}
