// 新版定时器
// 通过共用requestAnimationFrame，分别计算fps，来复用定时器，防止性能问题
export default (function() {
    class Timer {
        static instance: Timer
        fps: number;
        elms: any[];
        lastTime: number;
        timer: any;
        constructor(fps?: number) {
            this.fps = fps || 16; // 主定时器的帧率，一般为16
            this.elms = []; // 元素
            this.lastTime = 0;
            this.timer = null;
            this.loop(this.fps);
            if(Timer.instance) {
                return Timer.instance
            }
            return Timer.instance = this
        }
        loop(timestamp) {
            this.timer = requestAnimationFrame(Timer.prototype.loop.bind(this));
            if (timestamp - this.lastTime >= this.fps) {
                this.lastTime = timestamp;
                this.tick(timestamp);
            }
        }
        tick(timestamp) {
            // 遍历所有的elms，对比timestamp和lastTime来触发执行
            this.elms.forEach((item) => {
                // 暂时每个elm只有一个定时器，如果有多个，还要做key调用
                // 更新，已经可以有多个了，动态传入target和回调，不限定回调函数了，例如person就有2个定时器
                // 还可以给定时器加其他属性，比如暂停，反正item的信息足够多
                if (timestamp - item.lastTime > item.fps) {
                    item.lastTime = timestamp;
                    typeof item.fn == "function" && item.fn();
                }
            });
        }
        addElm(e) {
            this.elms.push(e);
        }
        removeElm(e) {
            let index = this.elms.findIndex((item) => item.id == e.id);
            index != -1 && this.elms.splice(index, 1);
        }
        clear() {
            cancelAnimationFrame(this.timer);
            this.timer = null;
        }
    }
    return new Timer()
})()
