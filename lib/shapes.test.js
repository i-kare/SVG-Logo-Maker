const { it } = require('node:test');
const {Circle, Triangle, Square} = require('./shapes.js');
describe('ShapeTests', () => {
  
 //The cx and cy attributes define the x and y coordinates of the center of the circle.
 //The r attribute defines the radius of the circle
    describe('circle', () => {
        it('should retain the characteristics of a circle', () => {
            const height = 300;
            const width = 200;
            const color = "red";
            const cx = 30;
            const cy = 40;
            const r = 20;
            const text ="abc";

            const circle = new Circle(text, color, cx, cy, r);
            expect(circle.height).toEqual(height)
            expect(circle.width).toEqual(width)
            expect(circle.text).toEqual(text)
            expect(circle.color).toEqual(color)
            expect(circle.cx).toEqual(cx)
            expect(circle.cy).toEqual(cy)
            expect(circle.r).toEqual(r)
        })

        it("should set color for a circle", ()=> {
            const color = "red";
            const circle = new Circle("abc", color, 100, 200, 10);
            expect(circle.color).toEqual("red")
            circle.setColor("yellow")
            expect(circle.color).toEqual("yellow")
        });

        it.skip("renders a circle", ()=> {
            const color = "red";
            const circle = new Circle("abc", color, 100, 200, 10);
            expect(circle.color).toEqual("red")
            circle.setColor("yellow")
            expect(circle.color).toEqual("yellow")
        });
    })
    
    describe.skip('triangle', () => {
        it.skip('should retain the characteristics of a triangle', () => {
            //const trianglePoints = 150, 18 244, 182 56, 182;
            // const width = 200;
            //const color = "red";
            // const cx = 30;
            // const cy = 40;
            // const r = 20;
             //const text ="abc";

            //  const triangle = new Triangle(text, color, trianglePoints);
            // expect(triangle.trianglePoints).toEqual(trianglePoints)
            // expect(circle.width).toEqual(width)
            //expect(triangle.text).toEqual(text)
            //expect(triangle.color).toEqual(color)
            // expect(circle.cx).toEqual(cx)
            // expect(circle.cy).toEqual(cy)
            // expect(circle.r).toEqual(r)

            //triangle.setColor("yellow")
            //expect(triangle.color).toEqual("yellow")
        })

        it.skip("should set color for a triangle", ()=>{

        });
        it.skip("render a triangle", ()=>{

        });
    })

    //The width and height attributes define thesquares height and the width
     describe.skip('square', () => {
        it.skip('should retain the characteristics of a square', () => {
            // const height = 200;
            // const width = 200;
            // const color = "red";
            // const cx = 30;
            // const cy = 40;
            // const r = 20;
            // const text ="abc";

            // const square = new square(text, color,width,height);
            // expect(square.height).toEqual(height)
            // expect(square.width).toEqual(width)
            // expect(squaretext).toEqual(text)
            // expect(square.color).toEqual(color)
            // expect(circle.cx).toEqual(cx)
            // expect(circle.cy).toEqual(cy)
            // expect(circle.r).toEqual(r)

            // square.setColor("yellow")
            // expect(square.color).toEqual("yellow")
        })
        it.skip("should set color for a square", ()=>{

        });
        it.skip("render a square", ()=>{

        });
    })
})