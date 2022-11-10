import Stage from "./core/Stage";
import CloudElm from "./models/CloudElm";
import Flower from "./models/Flower";
import Flower2 from "./models/Flower2";
import FlowerElm from "./models/FlowerElm";
import Plane from "./models/Plane";
import PlaneElm from "./models/PlaneElm";
import Player from "./models/Player";
import PlayerElm from "./models/PlayerElm";
import TextElm from "./models/TextElm";
import getHeartLinePoint from "./utils/getHeartLinePoint";
import getVectorAngle from "./utils/getVectorAngle";
import Timer from "./utils/Timer2";

// 初始化一个800 * 700的舞台
let s2 = new Stage(document.getElementById("stage"));
s2.ctx.scale(0.5, 0.5)

// 在舞台50 * 50的位置，初始化一个200 * 50的文字板
// let t1 = new TextElm({
//     text: "hello 解决1",
//     x: 50,
//     y: 50,
//     w: 200,
//     h: 50,
//     color: "blue",
//     parent: s2
// });
// s2.add(t1);

// 帧动画
// let player = new Player({
//     x: 0,
//     y: 0,
//     fps: 100,
//     w: 30,
//     h: 30,
// })
// s2.add(player)

// 组合动画
// let p = new PlayerElm({
//     x: 0,
//     y: 150,
//     w: 30,
//     h: 30,
// })
// s2.add(p.container)

// 绘制一个长大的花朵
// 这个长大会从左顶点偏移，很奇怪，应该从中心变大的
// 切换图片src方式不可取，会闪烁，通过雪碧图偏移量会好一些
// let f = new Flower({
//     x: 50,
//     y: 10,
//     w: 36,
//     h: 32
// })
// s2.add(f)

// let f2 = new Flower2({
//     x: 50,
//     y: 100,
//     w: 36,
//     h: 32
// })
// s2.add(f2)

// 花在容器中心盛开效果
// 花40 * 30，容器100 * 80，花要在容器中心，那么花的offsetXY为(100 / 2 - 40 / 2, 80 / 2 - 30 / 2)
// 当花变成1/3大小后，容器数据不变，那么花的offsetXY为(100 / 2 - 40 / 3 / 2, 80 / 2 - 30 / 3 / 2)
// let f3 = new FlowerElm({
//     x: 100,
//     y: 100,
//     w: 36,
//     h: 32
// })
// s2.add(f3.container)

// 飞机云朵

let p = new PlaneElm({
    x: 300,
    y: 300,
    w: 40,
    h: 40
})

s2.add(p.container)
let theta = 0
let t = new Timer(() => {
    if(theta < 180) {
        theta += 3
        let vector = {
            x: p.container.x,
            y: p.container.y
        }
        let point = getHeartLinePoint(theta, 7)
        p.container.x = point.x + 200
        p.container.y = point.y + 380
        let vector2 = {
            x: p.container.x,
            y: p.container.y
        }
        let f3 = new CloudElm({
            x: point.x + 200,
            y: point.y + 380,
            w: 40,
            h: 40
        })
        s2.add(f3.container)
        p.setTankAngle(getVectorAngle(vector, vector2) - 270)
    } else {
        s2.remove(p.container)
    }
}, 80)

let p2 = new PlaneElm({
    x: 300,
    y: 300,
    w: 40,
    h: 40
})

s2.add(p2.container)
let theta2 = 360
let t2 = new Timer(() => {
    if(theta2 > 180) {
        theta2 -= 3
        let vector = {
            x: p2.container.x,
            y: p2.container.y
        }
        let point = getHeartLinePoint(theta2, 7)
        p2.container.x = point.x + 200
        p2.container.y = point.y + 380
        let vector2 = {
            x: p2.container.x,
            y: p2.container.y
        }
        let f3 = new CloudElm({
            x: point.x + 200,
            y: point.y + 380,
            w: 40,
            h: 40
        })
        s2.add(f3.container)
        p2.setTankAngle(getVectorAngle(vector, vector2) - 270)
    } else {
        s2.remove(p2.container)
    }
}, 80)