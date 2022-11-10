import Stage from "./Stage";
import AutoZindex from "../utils/AutoZindex";
import guid from "../utils/guid";

interface ContainerOption {
    x: number,
    y: number,
    w?: number,
    h?: number,
    zindex?: number,
    showBorder?: boolean
}

// 方形容器
class Container {
    parent: Stage;
    type: string;
    children: any[];
    active: boolean;
    zindex: number;
    id: string;
    x: number;
    y: number;
    w: number;
    h: number;
    showBorder: boolean;
    constructor(option: ContainerOption) {
        this.x = option.x;
        this.y = option.y;
        this.w = option.w;
        this.h = option.h;
        this.id = guid();
        this.zindex = option.zindex ? option.zindex : AutoZindex.getIndex();
        this.active = false;
        this.children = [];
        this.type = "container";
        this.parent = null;
        this.showBorder = option.showBorder || false
    }
    destory() {
        this.parent.remove(this)
    }
    add(child) {
        child.parent = this;
        this.children.push(child);
    }
    remove(child) {
        // 删除元素的时候要先查找，不然会删错
        let index = this.children.findIndex((item) => item.id == child.id)
        index != -1 && this.children.splice(index, 1);
    }
    render() {
        // 绘制所有子元素，但是以container为基准，如container在(100, 100)，子元素1在(20, 20)，那么子元素1的绘制位置为(120, 120)
        if(this.showBorder) {
            Stage.ctx.beginPath();
            Stage.ctx.lineWidth = 1;
            Stage.ctx.strokeStyle = "#0f0";
            Stage.ctx.strokeRect(this.x - 2, this.y - 2, this.w + 4, this.h + 4);
        }
        this.children.forEach((item) => {
            item.updatePosition(this.x, this.y);
            item.render();
        });
    }
    setActive(f) {
        this.active = f;
    }
    updatePosition(x, y) {
        this.x = x;
        this.y = y;
    }
}

export default Container