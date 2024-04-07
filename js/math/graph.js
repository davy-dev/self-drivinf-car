class Graph{
    constructor(points = [], segments = []){
        this.points= points;
        this.segments = segments
    }
    draw(ctx){
        for (const seg of this.segments){
            seg.draw(ctx)
        }
        for (const point of this.points){
            point.draw(ctx)
        }
    }

    tryAddPoint(point){
        if(!this.containsPoint(point)){ 
            this.points.push(point)
            return true
        }else{
            return false
        }
    }
    tryAddSegment(segment){
        if(!this.containSegment(segment)){
            this.segments.push(segment)
            return true
        }else{
            return false
        }
    }
    containsPoint(point){
        return this.points.find((p)=> p.equals(point))
    }
    containSegment(segment){
        return this.segments.find((s)=>s.equals(segment))
    }
}