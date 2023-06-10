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
    //text 3 
    //textColor
    //shape
    //shapeColor
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

    //return circle html
    render(){
        return (
        <svg width={`${this.width}px`} height={`${this.height}px`}>
            <circle cx={this.cx} cy={this.cy} r={this.r} stroke="black" stroke-width={this.strokeWidth} fill={this.color} />
        </svg>)   
    }
}

class Square extends Shapes {
    constructor (text, color){ 
       super(color, text);
    }

//return square html
    render(){
        return (
            <svg width={`${this.width}px`} height={`${this.height}px`}>
                <square fill={this.color} stroke-width={this.strokeWidth} />
            </svg>)

    }
}

class Triangle extends Shapes {
    constructor(text, color, trianglePoints){//The points attribute defines the x and y coordinates for each corner of the triangle
        super(color, text);
        this.trianglePoints = trianglePoints; //"150, 18 244, 182 56, 182"
    }

    //return triangle html
    render(){
        return (
            <svg width={`${this.width}px`} height={`${this.height}px`}>
                <polygon points={this.trianglePoint} fill={this.color} />
            </svg>)     
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