import { Vector2 } from '../src/vector2'

describe("Simple expression tests", () => {
    test("Check literal value", () => {
        const vec = new Vector2(1.2,2.2);
        expect(vec.x).toBeCloseTo(1.2);
        expect(vec.y).toBeCloseTo(2.2);
    });
    test("Check magnitude", () => {
        const vec = new Vector2(1.2,2.2);
        expect(vec.magnitude()).toBeCloseTo(2.50599);
        expect(vec.magnitude()).toBeCloseTo(2.50599);
        expect(vec.sqrMagnitude()).toBeCloseTo(6.28);
    });
    test("Check div (scalar)", () => {
        const vec = new Vector2(1.2,2.2);
        const vec2 = vec.div(10.0);
        expect(vec2[0]).toBeCloseTo(1.2/10.0);
        expect(vec2[1]).toBeCloseTo(2.2/10.0);
    });
    test("Check mul (scalar)", () => {
        const vec = new Vector2(1.2,2.2).mul(10);
        expect(vec[0]).toBeCloseTo(12.0);
        expect(vec[1]).toBeCloseTo(22.0);
    });
    test("Normalize()", () => {
        const vec:Vector2 = new Vector2(1.2,2.2);
        vec.normalize();
        expect(vec.magnitude()).toBeCloseTo(1);
    });
    test("Swizzle Getters", () => {
        const vec = new Vector2(1.2,2.2);
        expect(vec.xy[0]).toBeCloseTo(1.2);
        expect(vec.xy[1]).toBeCloseTo(2.2);
        expect(vec.yx[0]).toBeCloseTo(2.2);
        expect(vec.yx[1]).toBeCloseTo(1.2);
        expect(vec.yy[0]).toBeCloseTo(2.2);
        expect(vec.yy[1]).toBeCloseTo(2.2);
        expect(vec.xx[0]).toBeCloseTo(1.2);
        expect(vec.xx[1]).toBeCloseTo(1.2);
    });
    test("Swizzle Setters", () => {
        const vec = new Vector2(1.2,2.2);
        vec.xy = [5.2,6.2]
        expect(vec.xy[0]).toBeCloseTo(5.2);
        expect(vec.xy[1]).toBeCloseTo(6.2);
        vec.yx = [10,20]
        expect(vec.yx[0]).toBeCloseTo(10);
        expect(vec.yx[1]).toBeCloseTo(20);
        vec.yy = [12,13]
        expect(vec.yy[0]).toBeCloseTo(13.0);
        expect(vec.yy[1]).toBeCloseTo(13.0);
        vec.xx = [1,2]
        expect(vec.xx[0]).toBeCloseTo(1);
        expect(vec.xx[1]).toBeCloseTo(1);
        vec.x = 3; vec.y = 5;
        expect(vec.x).toBeCloseTo(3);
        expect(vec.y).toBeCloseTo(5);
    });
    test("Addition and subtraction", () => {
        const vec1 = Vector2.ZERO();
        const vec2 = new Vector2(1,1);
        const vec3 = new Vector2(2,2);
        const vec4 = new Vector2(3,3);
        const vec5 = vec1.add(vec2);
        expect(vec5[0]).toBeCloseTo(1);
        expect(vec5[1]).toBeCloseTo(1);
        expect(vec1.add(vec2).isEqual(vec2)).toBe(true);
        expect(vec2.add(vec3).isEqual(vec4)).toBe(true);
        expect(vec2.sub(vec2).isEqual(vec1)).toBe(true);
    });
    test("Equals", () => {
        const vec1 = new Vector2(-1,-2)
        const vec2 = new Vector2(0,0)
        vec2.eq(vec1)
        expect(vec2.isEqual(vec1)).toBe(true)
        expect(vec2.isEqual(Vector2.ZERO())).toBe(false);
    });
    test("Dot", () => {
        const vec1 = new Vector2(0,1)
        const vec2 = new Vector2(1,0)
        expect(vec1.dot(vec2)).toBeCloseTo(0)
    });
    test("Rotate", () => {
        const vec1 = new Vector2(1,0)
        expect(vec1.rotate(Math.PI)[0]).toBeCloseTo(-1)
        expect(vec1.rotate(2*Math.PI)[0]).toBeCloseTo(1)
        expect(vec1.rotate(Math.PI/4).magnitude()).toBeCloseTo(1);
    });
    test("Rotate Degrees", () => {
        const vec1 = new Vector2(1,0)
        expect(vec1.rotateD(180)[0]).toBeCloseTo(-1)
        expect(vec1.rotateD(360)[0]).toBeCloseTo(1)
        expect(vec1.rotateD(90).magnitude()).toBeCloseTo(1);
    });
    test("fromArray", () => {
        const vec = Vector2.fromArray([1,2]);
        expect(vec.x).toBeCloseTo(1);
        expect(vec.y).toBeCloseTo(2);
    });
    test("toString", () => {
        const vec = Vector2.fromArray([1,2]);
        vec[0] = Math.round(vec[0])
        vec[1] = Math.round(vec[1])
        expect(vec.toString()).toBe("1,2");
    });
    test("ZERO Vector", () => {
        const vec = Vector2.ZERO();
        expect(vec.x).toBe(0);
        expect(vec.y).toBe(0);
    });
});