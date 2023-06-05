class Shapes {
    constructor(height, width, strokewidth, fill) {
        this.height = 500;
        this.width = 350;
        this.strokewidth = 3;
        this.fill = userInput;
    }
}
//The cx and cy attributes define the x and y coordinates of the center of the circle.
//The r attribute defines the radius of the circle
class Circle extends Shapes { 
    constructor(height, width, strokewidth, fill, cx, cy,r){ 
        super(height, width, strokewidth,fill);
        this.cx = 100; 
        this.cy = 100;      
        this.r = 100; 
        this.fill= rgb(0,0,255);
}}

class Square extends Shapes {
    constructor (height, width, strokewidth, fill){ //The width and height attributes define thesquares height and the width
       super(height, width, strokewidth,fill);
        this.width = 200;
        this.height =200;
        this.fill=rgb(0,0,255);
}}

class Triangle extends Shapes {
    constructor (height, width, strokewidth, fill, trianglePoints){//The points attribute defines the x and y coordinates for each corner of the triangle
        super(height, width, strokewidth,fill);
        this.trianglePoints = 150, 18 244, 182 56, 182; 
        this.fill= rgb(0,0,255);
}}

const newCircle = new Circle ();
const newSquare = new Square ();
const newTriangle = new Triangle ();

console.log(newCircle);
console.log(newSquare);
console.log(newTriangle);
