class Shapes {
    constructor(color, text) {
        this.height = 300;
        this.width = 200;
        this.strokeWidth = 3;
        this.color = color; 
        this.text = text; // any limit of characters
    }

    setColor(color){
        this.color = color;
    }
}
//The cx and cy attributes define the x and y coordinates of the center of the circle.
//The r attribute defines the radius of the circle
class Circle extends Shapes { 
    constructor(text, color, cx, cy,r){ 
        super(color, text);
        this.cx = cx; 
        this.cy = cy;      
        this.r = r; 
    }

    render(){
        // return circle html
    }
}

class Square extends Shapes {
    constructor (text, color){ //The width and height attributes define thesquares height and the width
       super(color, text);
        //this.fill=rgb(0,0,255);   
    }

    render(){
        // return square html
    }
}

class Triangle extends Shapes {
    constructor(text, color, trianglePoints){//The points attribute defines the x and y coordinates for each corner of the triangle
        super(color, text);
        this.trianglePoints = trianglePoints; 
        //this.fill= rgb(0,0,255);
    }

    render(){
        //return polygon points.... color ...html
    }
}

const newCircle = new Circle("abc","blue",50,50,100);
const newSquare = new Square("abc", "red", 200, 100);
const newTriangle = new Triangle("abc","blue","105,10 210,210 10,210");

console.log(newCircle);
console.log(newSquare);
console.log(newTriangle);

exports.Circle = Circle;
exports.Triangle = Triangle;
exports.Square= Square;