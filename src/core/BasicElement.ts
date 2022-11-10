import AutoZindex from "../utils/AutoZindex";
import Container from "./Container";
import guid from "../utils/guid";

// 基础元素
class BasicElement {
    x: number;
    y: number;
    offsetX: number;
    offsetY: number;
    id: string;
    zindex: number;
    active: boolean;
    event: {};
    parent: Container;
    constructor(option: any) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.offsetX = option.offsetX || 0;
        this.offsetY = option.offsetY || 0;
        this.id = guid();
        this.zindex = option.zindex ? option.zindex : AutoZindex.getIndex();
        this.active = false;
        this.event = {};
        this.parent = null;
    }
    setActive(f) {
        this.active = f;
    }
    // 一个元素，如果没有指定offset，那么他就是独立元素，offset为0，直接使用xy定位
    // 如果被加入container，offset应该为元素相对container的位置，元素相对canvas的位置则始终为xy + offset
    // 更新过程为container更新的时候，更新每个child的xy
    updatePosition(x, y) {
        // 如container在(100, 100)，子元素1在container的(20, 20)，那么子元素1的绘制位置为(120, 120)
        this.x = x + this.offsetX;
        this.y = y + this.offsetY;
    }
    addEvent(key, fn) {
        this.event[key] = this.event[key] || [];
        this.event[key].push(fn);
    }
    dispatchEvent(key) {
        this.event[key] && this.event[key].forEach((item) => item(this));
    }
}

export default BasicElement