
class Rect {

    constructor(){
        this.x = 0;
        this.y = 0;
    }

    draw(context) {
        if(this.x<100){
            this.x++;
        }

        context.save();
        context.translate(this.x,this.y);
        context.setFillStyle("#ff0000");
        context.beginPath();
        context.rect(0, 0, 100, 100);
        context.closePath();
        context.fill();
        context.restore();
    }
}

module.exports = Rect;