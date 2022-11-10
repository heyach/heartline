import Container from "../core/Container";
import guid from "../utils/guid";
import Timer from "../utils/Timer";
import Player from "./Player";
// 
class PersonElm {
    [x: string]: any;
    container: Container;
    player: Player;
    moveTimer: any;
    constructor(option) {
        this.container = new Container({
            x: option.x,
            y: option.y,
            w: option.w,
            h: option.h
        });
        
        this.player = new Player({
            offsetX: 0,
            offsetY: 0,
            w: 30,
            h: 30,
        })
      
        this.container.add(this.player);

        this.moveTimer = {
            id: guid(),
            target: this,
            fps: 20,
            lastTime: 0,
            fn: PersonElm.prototype.movex.bind(this)
        }
        Timer.addElm(this.moveTimer)

        this.moveTimer2 = {
            id: guid(),
            target: this,
            fps: 20,
            lastTime: 0,
            fn: PersonElm.prototype.movey.bind(this)
        }
        Timer.addElm(this.moveTimer2)
    }
    movex() {
        if(this.container.x < 300) {
            this.container.x ++
        }
    }
    movey() {
        if(this.container.y < 300) {
            this.container.y ++
        }
    }
}

export default PersonElm