const { Circle, Triangle, Square } = require('./shapes.js');

// The tests for all of the shapes
describe('ShapeTests', () => {
    describe('circle', () => {
        it('should retain the characteristics of a circle', () => {
            const shapeColor = "red";
   
            const circle = new Circle(shapeColor);
            expect(circle.shapeColor).toEqual(shapeColor)
            expect(circle.cy).toEqual("50%")
            expect(circle.cx).toEqual("50%")
            expect(circle.r).toEqual("38%")
        })

        it("should set color for a circle", ()=> {
            const shapeColor = "red";
            const circle = new Circle(shapeColor);
            expect(circle.shapeColor).toEqual("red")
            circle.setColor("yellow")
            expect(circle.shapeColor).toEqual("yellow")
        });

        it("renders a circle", ()=> {
            const shapeColor = "red";
            const circle = new Circle(shapeColor);
            expect(circle.render()).toEqual(`<circle cx="50%" cy="50%" r="38%" fill="${shapeColor}"/>`)           
        });
    })
    
    describe.skip('triangle', () => {
        it.skip('should retain the characteristics of a triangle', () => {
            const trianglePoints = "150, 18 244, 182 56, 182";
            const color = "red";
            const text ="abc";
            const triangle = new Triangle(text, color, trianglePoints);
            expect(triangle.trianglePoints).toEqual(trianglePoints)
            expect(triangle.text).toEqual(text)
            expect(triangle.color).toEqual(color)
            triangle.setColor("yellow")
            expect(triangle.color).toEqual("yellow")
        })

        it.skip("should set color for a triangle", ()=>{
            const color = "red";
            const triangle = new Triangle("abc", color, 100, 200, 10);
            expect(triangle.color).toEqual("red")
            triangle.setColor("yellow")
            expect(triangle.color).toEqual("yellow")
        });

        it.skip("renders a triangle", ()=> {
            const color = "red";
            const triangle = new Triangle("abc", color, 100, 200, 10);
            expect(triangle.color).toEqual("red")
           triangle.setColor("yellow")
            expect(triangle.color).toEqual("yellow")
        });
    })

    //The width and height attributes define the squares height and the width
     describe.skip('square', () => {
        it.skip('should retain the characteristics of a square', () => {
             const height = 200;
             const width = 200;
             const color = "red"
             const text ="abc";
             const square = new square(text, color,width,height);
             expect(square.height).toEqual(height)
             expect(square.width).toEqual(width)
             expect(squaretext).toEqual(text)
             expect(square.color).toEqual(color)
            square.setColor("yellow")
            expect(square.color).toEqual("yellow")
        })

        it.skip("should set color for a square", ()=>{
            const color = "red";
            const square = new Square("abc", color, 100, 200, 10);
            expect(square.color).toEqual("red")
            square.setColor("yellow")
            expect(square.color).toEqual("yellow")
        });

        it.skip("renders a square", ()=> {
            const color = "red";
            const square = new Square("abc", color, 100, 200, 10);
            expect(square.color).toEqual("red")
           square.setColor("yellow")
            expect(triangle.color).toEqual("yellow")
        });
    })
})