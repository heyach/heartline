import BasicElement from "../core/BasicElement"
import Stage from "../core/Stage"
import guid from "../utils/guid"
import Timer from "../utils/Timer"

// flower
export default class Flower extends BasicElement {
    w: any
    h: any
    image: HTMLImageElement
    sizeScale: number
    zhen: number
    growTimer: any
    runTimer: any
    constructor(option) {
        super(option)
        this.offsetX = option.offsetX
        this.offsetY = option.offsetY
        this.image = new Image()
        this.zhen = 0
        this.w = option.w
        this.h = option.h
        this.image.src = "../images/zhen.png"
        this.sizeScale = 5
        
        this.growTimer = {
            id: guid(),
            target: this,
            fps: 50,
            lastTime: 0,
            fn: Flower.prototype.grow.bind(this)
        }
        Timer.addElm(this.growTimer)
        
        this.runTimer = {
            id: guid(),
            target: this,
            fps: 20,
            lastTime: 0,
            fn: Flower.prototype.run.bind(this)
        }
        Timer.addElm(this.runTimer)
    }
    render() {
        Stage.ctx.drawImage(this.image, 0 + this.zhen % 10 * this.w, 0, this.w, this.h, this.x, this.y, this.w / this.sizeScale, this.h / this.sizeScale);
    }
    grow() {
        if(this.sizeScale >= 1) {
            this.sizeScale -= 0.1 // 初始缩小5倍，后续缩小倍数一直减小直到1倍
            // 则花的offsetXY更新
            this.offsetX = this.parent.w / 2 - this.w / this.sizeScale / 2
            this.offsetY = this.parent.h / 2 - this.h / this.sizeScale / 2
        } else {
            Timer.removeElm(this.growTimer)
        }
    }
    run() {
        this.zhen++
    }
}

