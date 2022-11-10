import Container from "../core/Container";
import Cloud from "./Cloud";

// 花朵容器，花在容器中间盛开 
export default class CloudElm {
    container: Container;
    constructor(option) {
        this.container = new Container({
            x: option.x,
            y: option.y,
            w: option.w,
            h: option.h,
            // showBorder: true
        });

        let f2 = new Cloud({
            // 花在container的中心
            offsetX: this.container.w / 2 - (40 / 2),
            offsetY: this.container.h / 2 - (40 / 2),
            w: 40,
            h: 40
        })

        this.container.add(f2)
    }
}
