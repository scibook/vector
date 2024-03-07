import { Vector3 } from '../src/vector3'

describe("Simple expression tests", () => {
    test("Check literal value", () => {
        const vec = new Vector3(1.2,2.2,3.2);
        expect(vec.x).toBeCloseTo(1.2);
        expect(vec.y).toBeCloseTo(2.2);
        expect(vec.z).toBeCloseTo(3.2);
    });
    test("Check magnitude", () => {
        const vec = new Vector3(1.2,2.2,3.2);
        expect(vec.magnitude()).toBeCloseTo(4.06448);
        expect(vec.sqrMagnitude()).toBeCloseTo(16.52);
    });
    test("Check div (scalar)", () => {
        const vec = new Vector3(1.2,2.2,3.2);
        const vec2 = vec.div(10.0);
        expect(vec2[0]).toBeCloseTo(1.2/10.0);
        expect(vec2[1]).toBeCloseTo(2.2/10.0);
        expect(vec2[2]).toBeCloseTo(3.2/10.0);
    });
    test("Check mul (scalar)", () => {
        const vec = new Vector3(1.2,2.2,3.2).mul(10);
        expect(vec[0]).toBeCloseTo(12.0);
        expect(vec[1]).toBeCloseTo(22.0);
        expect(vec[2]).toBeCloseTo(32.0);
    });
    test("Normalize()", () => {
        const vec:Vector3 = new Vector3(1.2,2.2,9.2);
        vec.normalize();
        expect(vec.magnitude()).toBeCloseTo(1);
    });
    test("Rotate", () => {
        let vec1 = new Vector3(1,0,0)
        expect(vec1.rotate(Math.PI)[0]).toBeCloseTo(-1)
        expect(vec1.rotate(Math.PI*2)[0]).toBeCloseTo(1)
        expect(vec1.rotate(Math.PI/2).magnitude()).toBeCloseTo(1);

        vec1 = Vector3.fromArray([0,1,0])
        expect(vec1.rotate(Math.PI,Vector3.Axis.X)[1]).toBeCloseTo(-1)
        expect(vec1.rotate(Math.PI*2,Vector3.Axis.X)[1]).toBeCloseTo(1)
        expect(vec1.rotate(Math.PI/2,Vector3.Axis.X).magnitude()).toBeCloseTo(1);

        vec1 = Vector3.fromArray([0,0,1])
        expect(vec1.rotate(Math.PI,Vector3.Axis.Y)[2]).toBeCloseTo(-1)
        expect(vec1.rotate(Math.PI*2,Vector3.Axis.Y)[2]).toBeCloseTo(1)
        expect(vec1.rotate(Math.PI/2,Vector3.Axis.Y).magnitude()).toBeCloseTo(1);
    });
    test("Rotate Degrees", () => {
        let vec1 = new Vector3(1,0,0)
        expect(vec1.rotateD(180)[0]).toBeCloseTo(-1)
        expect(vec1.rotateD(360)[0]).toBeCloseTo(1)
        expect(vec1.rotateD(90).magnitude()).toBeCloseTo(1);

        vec1 = Vector3.fromArray([0,1,0])
        expect(vec1.rotateD(180,Vector3.Axis.X)[1]).toBeCloseTo(-1)
        expect(vec1.rotateD(360,Vector3.Axis.X)[1]).toBeCloseTo(1)
        expect(vec1.rotateD(90,Vector3.Axis.X).magnitude()).toBeCloseTo(1);

        vec1 = Vector3.fromArray([0,0,1])
        expect(vec1.rotateD(180,Vector3.Axis.Y)[2]).toBeCloseTo(-1)
        expect(vec1.rotateD(360,Vector3.Axis.Y)[2]).toBeCloseTo(1)
        expect(vec1.rotateD(90,Vector3.Axis.Y).magnitude()).toBeCloseTo(1);
    });
    test("Swizzle Getters", () => {
        const vec = new Vector3(1,2,3)
        expect(vec.xxx.isEqual(new Vector3(1,1,1))).toBe(true)
        expect(vec.xxy.isEqual(new Vector3(1,1,2))).toBe(true)
        expect(vec.xxz.isEqual(new Vector3(1,1,3))).toBe(true)
        expect(vec.xyx.isEqual(new Vector3(1,2,1))).toBe(true)
        expect(vec.xyy.isEqual(new Vector3(1,2,2))).toBe(true)
        expect(vec.xyz.isEqual(new Vector3(1,2,3))).toBe(true)
        expect(vec.xzx.isEqual(new Vector3(1,3,1))).toBe(true)
        expect(vec.xzy.isEqual(new Vector3(1,3,2))).toBe(true)
        expect(vec.xzz.isEqual(new Vector3(1,3,3))).toBe(true)
        expect(vec.yxx.isEqual(new Vector3(2,1,1))).toBe(true)
        expect(vec.yxy.isEqual(new Vector3(2,1,2))).toBe(true)
        expect(vec.yxz.isEqual(new Vector3(2,1,3))).toBe(true)
        expect(vec.yyx.isEqual(new Vector3(2,2,1))).toBe(true)
        expect(vec.yyy.isEqual(new Vector3(2,2,2))).toBe(true)
        expect(vec.yyz.isEqual(new Vector3(2,2,3))).toBe(true)
        expect(vec.yzx.isEqual(new Vector3(2,3,1))).toBe(true)
        expect(vec.yzy.isEqual(new Vector3(2,3,2))).toBe(true)
        expect(vec.yzz.isEqual(new Vector3(2,3,3))).toBe(true)
        expect(vec.zxx.isEqual(new Vector3(3,1,1))).toBe(true)
        expect(vec.zxy.isEqual(new Vector3(3,1,2))).toBe(true)
        expect(vec.zxz.isEqual(new Vector3(3,1,3))).toBe(true)
        expect(vec.zyx.isEqual(new Vector3(3,2,1))).toBe(true)
        expect(vec.zyy.isEqual(new Vector3(3,2,2))).toBe(true)
        expect(vec.zyz.isEqual(new Vector3(3,2,3))).toBe(true)
        expect(vec.zzx.isEqual(new Vector3(3,3,1))).toBe(true)
        expect(vec.zzy.isEqual(new Vector3(3,3,2))).toBe(true)
        expect(vec.zzz.isEqual(new Vector3(3,3,3))).toBe(true)
    });
    test("Swizzle Setters", () => {
        const arr = [1,2,3]
        const vec = Vector3.fromArray(arr)
        const vec2 = Vector3.fromArray(arr)

        vec2.x = vec.x; vec2.y = vec.y; vec2.z = vec.z;
        expect(vec2.isEqual(vec)).toBe(true)

        vec2.xyz = arr; expect(vec2.xyz.isEqual(vec)).toBe(true)
        vec2.xzy = arr; expect(vec2.xzy.isEqual(vec)).toBe(true)
        vec2.yxz = arr; expect(vec2.yxz.isEqual(vec)).toBe(true)
        vec2.yzx = arr; expect(vec2.yzx.isEqual(vec)).toBe(true)
        vec2.zxy = arr; expect(vec2.zxy.isEqual(vec)).toBe(true)
        vec2.zyx = arr; expect(vec2.zyx.isEqual(vec)).toBe(true)
    });
    test("Addition and subtraction", () => {
        const vec1 = Vector3.ZERO();
        const vec2 = new Vector3(1,1,1);
        const vec3 = new Vector3(2,2,2);
        const vec4 = new Vector3(3,3,3);
        const vec5 = vec1.add(vec2);
        expect(vec5[0]).toBeCloseTo(1);
        expect(vec5[1]).toBeCloseTo(1);
        expect(vec1.add(vec2).isEqual(vec2)).toBe(true);
        expect(vec2.add(vec3).isEqual(vec4)).toBe(true);
        expect(vec2.sub(vec2).isEqual(vec1)).toBe(true);
    });
    test("Equals", () => {
        const vec1 = new Vector3(-1,-2,-3)
        const vec2 = new Vector3(0,0,0)
        vec2.eq(vec1)
        expect(vec2.isEqual(vec1)).toBe(true)
        expect(vec2.isEqual(Vector3.ZERO())).toBe(false);
    });
    test("Dot", () => {
        const vec1 = new Vector3(0,1,0)
        const vec2 = new Vector3(1,0,0)
        expect(vec1.dot(vec2)).toBeCloseTo(0)
    });
    test("fromArray", () => {
        const vec = Vector3.fromArray([1,2,3]);
        expect(vec.x).toBeCloseTo(1);
        expect(vec.y).toBeCloseTo(2);
        expect(vec.z).toBeCloseTo(3);
    });
    test("toString", () => {
        const vec = Vector3.fromArray([1,2,3]);
        vec[0] = Math.round(vec[0])
        vec[1] = Math.round(vec[1])
        vec[2] = Math.round(vec[2])
        expect(vec.toString()).toBe("1,2,3");
    });
    test("ZERO Vector", () => {
        const vec = Vector3.ZERO();
        expect(vec.x).toBe(0);
        expect(vec.y).toBe(0);
        expect(vec.z).toBe(0);
    });
});