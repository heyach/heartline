// 自增的zindex
// 由于zindex是一个重要的判断点击元素字段，除非用户传递，否则后加入的一律自增，这样就会排在上层
// zindex 正常自增index
// lindex 低层级index
// hindex 高层级index
let AutoZindex = (function() {
    class Singleton {
        static instance: Singleton
        zindex: number
        lindex: number
        hindex: number
        constructor() {
            this.zindex = 1000
            this.lindex = 500
            this.hindex = 5000
            if(Singleton.instance) {
                return Singleton.instance
            }
            return Singleton.instance = this
        }
        getIndex() {
            return ++this.zindex
        }
        getLindex() {
            return --this.lindex
        }
        getHindex() {
            return ++this.hindex
        }
    }
    return new Singleton()
})()
export default AutoZindex