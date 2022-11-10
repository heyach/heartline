import BasicElement from "../core/BasicElement"
import Stage from "../core/Stage"
import guid from "../utils/guid"
import Timer from "../utils/Timer"

// flower
export default class Flower extends BasicElement {
    w: any
    h: any
    image: HTMLImageElement
    c: number
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
        this.image.src = `./images/zhen/0.png`
        this.c = 0.02
        
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
        this.image.src = `./images/zhen/${this.zhen % 10}.png`
        Stage.ctx.drawImage(this.image, this.x, this.y, this.w * this.c, this.h * this.c);
    }
    grow() {
        if(this.c <= 1) {
            this.c += 0.02
        } else {
            Timer.removeElm(this.growTimer)
        }
    }
    run() {
        this.zhen++
    }
}

