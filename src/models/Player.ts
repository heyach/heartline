import BasicElement from "../core/BasicElement"
import Stage from "../core/Stage";
import guid from "../utils/guid";
import Timer from "../utils/Timer";

// player
class Person extends BasicElement {
    x: number
    y: number
    w: number
    h: number
    image: HTMLImageElement
    run: boolean
    runIndex: number
    playTimer: any;
    moveTimer: any;
    constructor(option) {
        super(option)
        this.offsetX = option.offsetX
        this.offsetY = option.offsetY
        this.w = option.w
        this.h = option.h
        this.image = new Image()
        this.image.src = "../images/run.png"
        
        this.runIndex = 0

        this.playTimer = {
            id: guid(),
            target: this,
            fps: 100,
            lastTime: 0,
            fn: Person.prototype.tick.bind(this)
        }
        Timer.addElm(this.playTimer)
        
        // this.moveTimer = {
        //     id: guid(),
        //     target: this,
        //     fps: 20,
        //     lastTime: 0,
        //     fn: Person.prototype.move.bind(this)
        // }
        // Timer.addElm(this.moveTimer)
    }
    render() {
        Stage.ctx.drawImage(this.image, 0 + this.runIndex % 8 * this.w, 0, this.w, this.h, this.x, this.y, this.w, this.h);
    }
    tick() {
        this.runIndex++
    }
    move() {
        if(this.x < 300) {
            this.x++
        } else {
            Timer.removeElm(this.moveTimer)
            Timer.removeElm(this.playTimer)
        }
    }
    pointInElement(x, y) {
        return this.x <= x && this.y <= y && this.x + this.w >= x && this.y + this.h >= y;
    }
}

export default Person
