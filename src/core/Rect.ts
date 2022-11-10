import BasicElement from "./BasicElement";
import Stage from "./Stage";

interface RectOption {
    x?: number,
    y?: number,
    w: number,
    h: number,
    offsetX: number,
    offsetY: number,
    color?: string,
    zindex?: number
}

// 矩形
class Rect extends BasicElement {
    w: number;
    h: number;
    type: string;
    color: string;
    constructor(option: RectOption) {
        super(option);
        this.w = option.w;
        this.h = option.h;
        this.type = "rect";
        this.color = option.color || "#000";
    }

    render() {
        Stage.ctx.beginPath();
        Stage.ctx.fillStyle = this.color;
        Stage.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    // 点是否在矩形内
    pointInElement(x, y) {
        return this.x <= x && this.y <= y && this.x + this.w >= x && this.y + this.h >= y;
    }
}

export default Rect