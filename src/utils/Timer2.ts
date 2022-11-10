class Timer {
    interval: number
    fn: Function
    lastTime: number
    timer: number
    delay: any
    de: number
    initTime: number
    constructor(fn, interval, delay?) {
        this.interval = interval
        this.fn = fn
        this.initTime = 0
        this.lastTime = 0
        this.timer = null
        this.delay = delay

        this.loop(0)
    }
    loop(timestamp){
        !this.initTime && (this.initTime = timestamp)
        this.timer = requestAnimationFrame(Timer.prototype.loop.bind(this))
        if(timestamp - this.lastTime > this.interval) { 
            this.lastTime = timestamp;
            typeof this.fn == "function" && this.fn(timestamp)
        }
    }
    clear() {
        cancelAnimationFrame(this.timer)
        this.timer = null
    }
}

export default Timer