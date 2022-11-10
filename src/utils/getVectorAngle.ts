// 获取向量与x轴的角度
export default function getVectorAngle(a: {x: number, y: number}, b: {x: number, y: number}) {
    var angle = Math.atan2((b.y - a.y), (b.x - a.x)) 
    var theta = angle * (180 / Math.PI); 
    return Math.floor(theta) 
}