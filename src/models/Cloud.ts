import BasicElement from "../core/BasicElement"
import Stage from "../core/Stage"
import guid from "../utils/guid"
import Timer from "../utils/Timer"

// cloud
export default class Cloud extends BasicElement {
    w: any
    h: any
    image: HTMLImageElement
    sizeScale: number
    growTimer: any
    constructor(option) {
        super(option)
        this.image = new Image()
        this.w = option.w
        this.h = option.h
        this.image.src = `../images/cloud/${[Math.floor(Math.random() * 4)]}.png`
        this.sizeScale = 5
        
        this.growTimer = {
            id: guid(),
            target: this,
            fps: 16,
            lastTime: 0,
            fn: Cloud.prototype.grow.bind(this)
        }
        Timer.addElm(this.growTimer)
    }
    render() {
        Stage.ctx.drawImage(this.image, this.x, this.y, this.w / this.sizeScale, this.h / this.sizeScale);
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
}

