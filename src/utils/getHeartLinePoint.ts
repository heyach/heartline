export default function(theta: number, amplitude: number = 1) {
    let p = {
        x: 16 * Math.pow(Math.sin(theta * Math.PI / 180), 3) * amplitude,
        y: (13 * Math.cos(theta * Math.PI / 180) - 5 * Math.cos(2 * theta * Math.PI / 180) - 2 * Math.cos(3 * theta * Math.PI / 180) - Math.cos(4 * theta * Math.PI / 180)) * amplitude
    }
    return {
        x: Math.floor(p.x),
        y: Math.floor(p.y)
    }
}