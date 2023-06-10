const { Circle, Triangle, Square } = require('./shapes.js');

// The tests for all of the shapes
describe('ShapeTests', () => {
    // the test for the circle class
    describe('circle', () => {
        //check properties of a circle
        it('should retain the characteristics of a circle', () => {
            const shapeColor = "red";

            const circle = new Circle(shapeColor);
            expect(circle.shapeColor).toEqual(shapeColor)
            expect(circle.cy).toEqual("50%")
            expect(circle.cx).toEqual("50%")
            expect(circle.r).toEqual("38%")
        })

        // check setColor function for a circle
        it("should set color for a circle", () => {
            const shapeColor = "red";
            const circle = new Circle(shapeColor);
            expect(circle.shapeColor).toEqual("red")
            circle.setColor("yellow")
            expect(circle.shapeColor).toEqual("yellow")
        });

        //check render function of circle
        it("renders a circle", () => {
            const shapeColor = "red";
            const circle = new Circle(shapeColor);
            expect(circle.render()).toEqual(`<circle cx="50%" cy="50%" r="38%" fill="${shapeColor}"/>`)
        });
    })

    // test for the triangle class
    describe('triangle', () => {
        // check triangle properties 
        it('should retain the characteristics of a triangle', () => {
            const trianglePoints = "100 0, 200, 300, 5 300";
            const color = "red";
            const triangle = new Triangle(color);
            expect(triangle.trianglePoints).toEqual(trianglePoints)
            expect(triangle.shapeColor).toEqual(color)

        })

        //check setColor function of triangle
        it("should set color for a triangle", () => {
            const color = "red";
            const triangle = new Triangle(color);
            expect(triangle.shapeColor).toEqual("red")
            triangle.setColor("yellow")
            expect(triangle.shapeColor).toEqual("yellow")
        });

        //check render function of a triangle
        it("renders a triangle", () => {
            const color = "red";
            const triangle = new Triangle(color);
            expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}"/>`)
        });
    })

    // the test for the square class
    describe('square', () => {
        //test to check properties of a square
        it('should retain the characteristics of a square', () => {
            const height = "200px";
            const width = "200px";
            const color = "red"
            const square = new Square(color);
            expect(square.height).toEqual(height)
            expect(square.width).toEqual(width)
            expect(square.shapeColor).toEqual(color)

        })
        //check setColor function of square
        it("should set color for a square", () => {
            const color = "red";
            const square = new Square(color);
            expect(square.shapeColor).toEqual("red")
            square.setColor("yellow")
            expect(square.shapeColor).toEqual("yellow")
        });

        //check render function of square
        it("renders a square", () => {
            const color = "red";
            const square = new Square(color);
            expect(square.render()).toEqual(`<rect height="200px" width="200px" fill="${color}"/>`)
        });
    })
})