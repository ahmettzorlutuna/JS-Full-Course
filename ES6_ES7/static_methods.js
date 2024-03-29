class Point{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        
        return Math.hypot(dx,dy);
    }
}

const d1 = new Point(30,10);
const d2 = new Point(20,5);


console.log(Point.distance(d1,d2));

