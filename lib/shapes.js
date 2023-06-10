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

//Class Square with height and width
class Square extends Shapes {
    constructor (shapeColor){ 
       super(shapeColor);
       this.height = "200px";
       this.width = "200px";
    }

    // Returns the square html as a string
    render(){
        return (`<rect height="${this.height}" width="${this.width}" fill="${this.shapeColor}"/>`)
    }
}

// Triangle class with the trianglePoint property
// The points attribute defines the x and y coordinates for each corner of the triangle
class Triangle extends Shapes {
    constructor(shapeColor){
        super(shapeColor);
        this.trianglePoints = "100 0, 200, 300, 5 300";
    }

    //Return polygon html as a string
    render(){
       return(`<polygon points="${this.trianglePoints}" fill="${this.shapeColor}"/>`) 
    }
}

module.exports = {
    Circle, Triangle, Square
};