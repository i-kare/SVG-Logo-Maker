const {Circle, Triangle, Square} = require('./shapes.js');
describe('ShapeTests', () => {
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

            circle.setColor("yellow")
            expect(circle.color).toEqual("yellow")
        })
    })
    describe('triangle', () => {
        it('should retain the characteristics of a triangle', () => {
            // const height = 300;
            // const width = 200;
            // const color = "red";
            // const cx = 30;
            // const cy = 40;
            // const r = 20;
            // const text ="abc";

            // const circle = new Circle(text, color, cx, cy, r);
            // expect(circle.height).toEqual(height)
            // expect(circle.width).toEqual(width)
            // expect(circle.text).toEqual(text)
            // expect(circle.color).toEqual(color)
            // expect(circle.cx).toEqual(cx)
            // expect(circle.cy).toEqual(cy)
            // expect(circle.r).toEqual(r)

            // circle.setColor("yellow")
            // expect(circle.color).toEqual("yellow")
        })
    })
     describe('square', () => {
        it('should retain the characteristics of a circle', () => {
            // const height = 300;
            // const width = 200;
            // const color = "red";
            // const cx = 30;
            // const cy = 40;
            // const r = 20;
            // const text ="abc";

            // const circle = new Circle(text, color, cx, cy, r);
            // expect(circle.height).toEqual(height)
            // expect(circle.width).toEqual(width)
            // expect(circle.text).toEqual(text)
            // expect(circle.color).toEqual(color)
            // expect(circle.cx).toEqual(cx)
            // expect(circle.cy).toEqual(cy)
            // expect(circle.r).toEqual(r)

            // circle.setColor("yellow")
            // expect(circle.color).toEqual("yellow")
        })
    })
})
