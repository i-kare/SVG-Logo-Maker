class Shapes {
    constructor(shapeColor) {
        this.shapeColor = shapeColor; 
    }

    setColor(shapeColor){
        this.shapeColor = shapeColor;
    }
    //text 3 
    //textColor
    //shape
    //shapeColor
}

// Circle class with the properties cx,cy,r, and strokeColor
//The cx and cy attributes define the x and y coordinates of the center of the circle.
//The r attribute defines the radius of the circle
//Stroke color is the color of the border
class Circle extends Shapes { 
    constructor(shapeColor){ 
        super(shapeColor);
        this.cx = "50%"; 
        this.cy = "50%";      
        this.r = "38%"; 
    }

    //Returns the circle html as a string
    render() {
        return (`<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.shapeColor}"/>`)
    }
}

class Square extends Shapes {
    constructor (text, color){ 
       super(color, text);
    }

//return square html
    render(){
        // return (
        //     <svg width={`${this.width}px`} height={`${this.height}px`}>
        //         <square fill={this.color} stroke-width={this.strokeWidth} />
        //     </svg>)

    }
}

class Triangle extends Shapes {
    constructor(text, color, trianglePoints){//The points attribute defines the x and y coordinates for each corner of the triangle
        super(color, text);
        this.trianglePoints = trianglePoints; //"150, 18 244, 182 56, 182"
    }

    //return triangle html
    render(){
        // return (
        //     <svg width={`${this.width}px`} height={`${this.height}px`}>
        //         <polygon points={this.trianglePoint} fill={this.color} />
        //     </svg>)     
    }
}

module.exports = {
    Circle, Triangle, Square
};