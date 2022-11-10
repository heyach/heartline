import BasicElement from "../core/BasicElement"
import Stage from "../core/Stage"

// plane
export default class Plane extends BasicElement {
    w: any
    h: any
    image: HTMLImageElement
    angle: number
    origin: number[]
    constructor(option) {
        super(option)
        this.w = option.w
        this.h = option.h
        this.image = new Image()
        this.image.src = "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c5dc6a3ac62f45569b212bbd8535d80d~tplv-k3u1fbpfcp-watermark.image?"
        this.angle = 0
        this.origin = [50, 50]
    }
    render() {
        // 以图片中心点为基点
        // 1 先移到基点
        Stage.ctx.translate(this.x + this.w * this.origin[0] / 100, this.y + this.h * this.origin[1] / 100);
        // 2 旋转一定度数
        Stage.ctx.rotate(this.angle * Math.PI / 180);
        // 3 绘制元素，要基于translate之后重新计算位置，简单来说就是元素绘制是基于左上角xy的
        // 但是ctx的原点已经改到元素的起点了，并且比元素多改了基点(this.w * this.origin[0] / 100和this.h * this.origin[1] / 100)的量，所以绘制的时候要把这个减去
        // ctx.strokeRect(-this.w * this.origin[0] / 100, -this.h * this.origin[1] / 100, this.w, this.h);
        Stage.ctx.drawImage(this.image, -this.w * this.origin[0] / 100, -this.h * this.origin[1] / 100, this.w, this.h);
        // 4 坐标系还原到初始
        Stage.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    setAngle(angle) {
        this.angle = angle
    }
}

