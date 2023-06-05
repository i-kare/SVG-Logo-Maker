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
}}

class Square extends Shapes {
    constructor (height, width, fill){ //The width and height attributes define thesquares height and the width
       super(height, width,fill);
        this.width = 200;
        this.height = 200;
        //this.fill=rgb(0,0,255);
}}

class Triangle extends Shapes {
    constructor (height, width, fill, trianglePoints){//The points attribute defines the x and y coordinates for each corner of the triangle
        super(height, width,fill);
        this.trianglePoints = "150, 18 244, 182 56, 182" 
        //this.fill= rgb(0,0,255);
}}

const newCircle = new Circle ("abc","blue",50,50,100);
const newSquare = new Square ();
const newTriangle = new Triangle ();

console.log(newCircle);
console.log(newSquare);
console.log(newTriangle);
exports.Circle = Circle;
exports.Triangle = Triangle;
exports.Square= Square;