import { Vector4 } from '../src/vector4'

describe("Simple expression tests", () => {
    test("Check literal value", () => {
        const vec = new Vector4(1.2,2.2,3.2,4.2);
        expect(vec.x).toBeCloseTo(1.2);
        expect(vec.y).toBeCloseTo(2.2);
        expect(vec.z).toBeCloseTo(3.2);
        expect(vec.w).toBeCloseTo(4.2);
    });
    test("Check magnitude", () => {
        const vec = new Vector4(1.2,2.2,3.2,4.2);
        expect(vec.magnitude()).toBeCloseTo(5.84465);
        expect(vec.sqrMagnitude()).toBeCloseTo(34.15993);
    });
    test("Check div (scalar)", () => {
        const vec = new Vector4(1.2,2.2,3.2,4.2);
        const vec2 = vec.div(10.0);
        expect(vec2[0]).toBeCloseTo(1.2/10.0);
        expect(vec2[1]).toBeCloseTo(2.2/10.0);
        expect(vec2[2]).toBeCloseTo(3.2/10.0);
        expect(vec2[3]).toBeCloseTo(4.2/10.0);
    });
    test("Check mul (scalar)", () => {
        const vec = new Vector4(1.2,2.2,3.2,4.2).mul(10);
        expect(vec[0]).toBeCloseTo(12.0);
        expect(vec[1]).toBeCloseTo(22.0);
        expect(vec[2]).toBeCloseTo(32.0);
        expect(vec[3]).toBeCloseTo(42.0);
    });
    test("Normalize()", () => {
        const vec:Vector4 = new Vector4(1.2,2.2,9.2,5.78);
        vec.normalize();
        expect(vec.magnitude()).toBeCloseTo(1);
    });
    test("Swizzle Getters", () => {
        const vec = new Vector4(1,2,3,4)
        expect(vec.xxxx.isEqual(new Vector4(1,1,1,1))).toBe(true)
        expect(vec.xxxy.isEqual(new Vector4(1,1,1,2))).toBe(true)
        expect(vec.xxxz.isEqual(new Vector4(1,1,1,3))).toBe(true)
        expect(vec.xxxw.isEqual(new Vector4(1,1,1,4))).toBe(true)
        expect(vec.xxyx.isEqual(new Vector4(1,1,2,1))).toBe(true)
        expect(vec.xxyy.isEqual(new Vector4(1,1,2,2))).toBe(true)
        expect(vec.xxyz.isEqual(new Vector4(1,1,2,3))).toBe(true)
        expect(vec.xxyw.isEqual(new Vector4(1,1,2,4))).toBe(true)
        expect(vec.xxzx.isEqual(new Vector4(1,1,3,1))).toBe(true)
        expect(vec.xxzy.isEqual(new Vector4(1,1,3,2))).toBe(true)
        expect(vec.xxzz.isEqual(new Vector4(1,1,3,3))).toBe(true)
        expect(vec.xxzw.isEqual(new Vector4(1,1,3,4))).toBe(true)
        expect(vec.xxwx.isEqual(new Vector4(1,1,4,1))).toBe(true)
        expect(vec.xxwy.isEqual(new Vector4(1,1,4,2))).toBe(true)
        expect(vec.xxwz.isEqual(new Vector4(1,1,4,3))).toBe(true)
        expect(vec.xxww.isEqual(new Vector4(1,1,4,4))).toBe(true)
        expect(vec.xyxx.isEqual(new Vector4(1,2,1,1))).toBe(true)
        expect(vec.xyxy.isEqual(new Vector4(1,2,1,2))).toBe(true)
        expect(vec.xyxz.isEqual(new Vector4(1,2,1,3))).toBe(true)
        expect(vec.xyxw.isEqual(new Vector4(1,2,1,4))).toBe(true)
        expect(vec.xyyx.isEqual(new Vector4(1,2,2,1))).toBe(true)
        expect(vec.xyyy.isEqual(new Vector4(1,2,2,2))).toBe(true)
        expect(vec.xyyz.isEqual(new Vector4(1,2,2,3))).toBe(true)
        expect(vec.xyyw.isEqual(new Vector4(1,2,2,4))).toBe(true)
        expect(vec.xyzx.isEqual(new Vector4(1,2,3,1))).toBe(true)
        expect(vec.xyzy.isEqual(new Vector4(1,2,3,2))).toBe(true)
        expect(vec.xyzz.isEqual(new Vector4(1,2,3,3))).toBe(true)
        expect(vec.xyzw.isEqual(new Vector4(1,2,3,4))).toBe(true)
        expect(vec.xywx.isEqual(new Vector4(1,2,4,1))).toBe(true)
        expect(vec.xywy.isEqual(new Vector4(1,2,4,2))).toBe(true)
        expect(vec.xywz.isEqual(new Vector4(1,2,4,3))).toBe(true)
        expect(vec.xyww.isEqual(new Vector4(1,2,4,4))).toBe(true)
        expect(vec.xzxx.isEqual(new Vector4(1,3,1,1))).toBe(true)
        expect(vec.xzxy.isEqual(new Vector4(1,3,1,2))).toBe(true)
        expect(vec.xzxz.isEqual(new Vector4(1,3,1,3))).toBe(true)
        expect(vec.xzxw.isEqual(new Vector4(1,3,1,4))).toBe(true)
        expect(vec.xzyx.isEqual(new Vector4(1,3,2,1))).toBe(true)
        expect(vec.xzyy.isEqual(new Vector4(1,3,2,2))).toBe(true)
        expect(vec.xzyz.isEqual(new Vector4(1,3,2,3))).toBe(true)
        expect(vec.xzyw.isEqual(new Vector4(1,3,2,4))).toBe(true)
        expect(vec.xzzx.isEqual(new Vector4(1,3,3,1))).toBe(true)
        expect(vec.xzzy.isEqual(new Vector4(1,3,3,2))).toBe(true)
        expect(vec.xzzz.isEqual(new Vector4(1,3,3,3))).toBe(true)
        expect(vec.xzzw.isEqual(new Vector4(1,3,3,4))).toBe(true)
        expect(vec.xzwx.isEqual(new Vector4(1,3,4,1))).toBe(true)
        expect(vec.xzwy.isEqual(new Vector4(1,3,4,2))).toBe(true)
        expect(vec.xzwz.isEqual(new Vector4(1,3,4,3))).toBe(true)
        expect(vec.xzww.isEqual(new Vector4(1,3,4,4))).toBe(true)
        expect(vec.xwxx.isEqual(new Vector4(1,4,1,1))).toBe(true)
        expect(vec.xwxy.isEqual(new Vector4(1,4,1,2))).toBe(true)
        expect(vec.xwxz.isEqual(new Vector4(1,4,1,3))).toBe(true)
        expect(vec.xwxw.isEqual(new Vector4(1,4,1,4))).toBe(true)
        expect(vec.xwyx.isEqual(new Vector4(1,4,2,1))).toBe(true)
        expect(vec.xwyy.isEqual(new Vector4(1,4,2,2))).toBe(true)
        expect(vec.xwyz.isEqual(new Vector4(1,4,2,3))).toBe(true)
        expect(vec.xwyw.isEqual(new Vector4(1,4,2,4))).toBe(true)
        expect(vec.xwzx.isEqual(new Vector4(1,4,3,1))).toBe(true)
        expect(vec.xwzy.isEqual(new Vector4(1,4,3,2))).toBe(true)
        expect(vec.xwzz.isEqual(new Vector4(1,4,3,3))).toBe(true)
        expect(vec.xwzw.isEqual(new Vector4(1,4,3,4))).toBe(true)
        expect(vec.xwwx.isEqual(new Vector4(1,4,4,1))).toBe(true)
        expect(vec.xwwy.isEqual(new Vector4(1,4,4,2))).toBe(true)
        expect(vec.xwwz.isEqual(new Vector4(1,4,4,3))).toBe(true)
        expect(vec.xwww.isEqual(new Vector4(1,4,4,4))).toBe(true)
        expect(vec.yxxx.isEqual(new Vector4(2,1,1,1))).toBe(true)
        expect(vec.yxxy.isEqual(new Vector4(2,1,1,2))).toBe(true)
        expect(vec.yxxz.isEqual(new Vector4(2,1,1,3))).toBe(true)
        expect(vec.yxxw.isEqual(new Vector4(2,1,1,4))).toBe(true)
        expect(vec.yxyx.isEqual(new Vector4(2,1,2,1))).toBe(true)
        expect(vec.yxyy.isEqual(new Vector4(2,1,2,2))).toBe(true)
        expect(vec.yxyz.isEqual(new Vector4(2,1,2,3))).toBe(true)
        expect(vec.yxyw.isEqual(new Vector4(2,1,2,4))).toBe(true)
        expect(vec.yxzx.isEqual(new Vector4(2,1,3,1))).toBe(true)
        expect(vec.yxzy.isEqual(new Vector4(2,1,3,2))).toBe(true)
        expect(vec.yxzz.isEqual(new Vector4(2,1,3,3))).toBe(true)
        expect(vec.yxzw.isEqual(new Vector4(2,1,3,4))).toBe(true)
        expect(vec.yxwx.isEqual(new Vector4(2,1,4,1))).toBe(true)
        expect(vec.yxwy.isEqual(new Vector4(2,1,4,2))).toBe(true)
        expect(vec.yxwz.isEqual(new Vector4(2,1,4,3))).toBe(true)
        expect(vec.yxww.isEqual(new Vector4(2,1,4,4))).toBe(true)
        expect(vec.yyxx.isEqual(new Vector4(2,2,1,1))).toBe(true)
        expect(vec.yyxy.isEqual(new Vector4(2,2,1,2))).toBe(true)
        expect(vec.yyxz.isEqual(new Vector4(2,2,1,3))).toBe(true)
        expect(vec.yyxw.isEqual(new Vector4(2,2,1,4))).toBe(true)
        expect(vec.yyyx.isEqual(new Vector4(2,2,2,1))).toBe(true)
        expect(vec.yyyy.isEqual(new Vector4(2,2,2,2))).toBe(true)
        expect(vec.yyyz.isEqual(new Vector4(2,2,2,3))).toBe(true)
        expect(vec.yyyw.isEqual(new Vector4(2,2,2,4))).toBe(true)
        expect(vec.yyzx.isEqual(new Vector4(2,2,3,1))).toBe(true)
        expect(vec.yyzy.isEqual(new Vector4(2,2,3,2))).toBe(true)
        expect(vec.yyzz.isEqual(new Vector4(2,2,3,3))).toBe(true)
        expect(vec.yyzw.isEqual(new Vector4(2,2,3,4))).toBe(true)
        expect(vec.yywx.isEqual(new Vector4(2,2,4,1))).toBe(true)
        expect(vec.yywy.isEqual(new Vector4(2,2,4,2))).toBe(true)
        expect(vec.yywz.isEqual(new Vector4(2,2,4,3))).toBe(true)
        expect(vec.yyww.isEqual(new Vector4(2,2,4,4))).toBe(true)
        expect(vec.yzxx.isEqual(new Vector4(2,3,1,1))).toBe(true)
        expect(vec.yzxy.isEqual(new Vector4(2,3,1,2))).toBe(true)
        expect(vec.yzxz.isEqual(new Vector4(2,3,1,3))).toBe(true)
        expect(vec.yzxw.isEqual(new Vector4(2,3,1,4))).toBe(true)
        expect(vec.yzyx.isEqual(new Vector4(2,3,2,1))).toBe(true)
        expect(vec.yzyy.isEqual(new Vector4(2,3,2,2))).toBe(true)
        expect(vec.yzyz.isEqual(new Vector4(2,3,2,3))).toBe(true)
        expect(vec.yzyw.isEqual(new Vector4(2,3,2,4))).toBe(true)
        expect(vec.yzzx.isEqual(new Vector4(2,3,3,1))).toBe(true)
        expect(vec.yzzy.isEqual(new Vector4(2,3,3,2))).toBe(true)
        expect(vec.yzzz.isEqual(new Vector4(2,3,3,3))).toBe(true)
        expect(vec.yzzw.isEqual(new Vector4(2,3,3,4))).toBe(true)
        expect(vec.yzwx.isEqual(new Vector4(2,3,4,1))).toBe(true)
        expect(vec.yzwy.isEqual(new Vector4(2,3,4,2))).toBe(true)
        expect(vec.yzwz.isEqual(new Vector4(2,3,4,3))).toBe(true)
        expect(vec.yzww.isEqual(new Vector4(2,3,4,4))).toBe(true)
        expect(vec.ywxx.isEqual(new Vector4(2,4,1,1))).toBe(true)
        expect(vec.ywxy.isEqual(new Vector4(2,4,1,2))).toBe(true)
        expect(vec.ywxz.isEqual(new Vector4(2,4,1,3))).toBe(true)
        expect(vec.ywxw.isEqual(new Vector4(2,4,1,4))).toBe(true)
        expect(vec.ywyx.isEqual(new Vector4(2,4,2,1))).toBe(true)
        expect(vec.ywyy.isEqual(new Vector4(2,4,2,2))).toBe(true)
        expect(vec.ywyz.isEqual(new Vector4(2,4,2,3))).toBe(true)
        expect(vec.ywyw.isEqual(new Vector4(2,4,2,4))).toBe(true)
        expect(vec.ywzx.isEqual(new Vector4(2,4,3,1))).toBe(true)
        expect(vec.ywzy.isEqual(new Vector4(2,4,3,2))).toBe(true)
        expect(vec.ywzz.isEqual(new Vector4(2,4,3,3))).toBe(true)
        expect(vec.ywzw.isEqual(new Vector4(2,4,3,4))).toBe(true)
        expect(vec.ywwx.isEqual(new Vector4(2,4,4,1))).toBe(true)
        expect(vec.ywwy.isEqual(new Vector4(2,4,4,2))).toBe(true)
        expect(vec.ywwz.isEqual(new Vector4(2,4,4,3))).toBe(true)
        expect(vec.ywww.isEqual(new Vector4(2,4,4,4))).toBe(true)
        expect(vec.zxxx.isEqual(new Vector4(3,1,1,1))).toBe(true)
        expect(vec.zxxy.isEqual(new Vector4(3,1,1,2))).toBe(true)
        expect(vec.zxxz.isEqual(new Vector4(3,1,1,3))).toBe(true)
        expect(vec.zxxw.isEqual(new Vector4(3,1,1,4))).toBe(true)
        expect(vec.zxyx.isEqual(new Vector4(3,1,2,1))).toBe(true)
        expect(vec.zxyy.isEqual(new Vector4(3,1,2,2))).toBe(true)
        expect(vec.zxyz.isEqual(new Vector4(3,1,2,3))).toBe(true)
        expect(vec.zxyw.isEqual(new Vector4(3,1,2,4))).toBe(true)
        expect(vec.zxzx.isEqual(new Vector4(3,1,3,1))).toBe(true)
        expect(vec.zxzy.isEqual(new Vector4(3,1,3,2))).toBe(true)
        expect(vec.zxzz.isEqual(new Vector4(3,1,3,3))).toBe(true)
        expect(vec.zxzw.isEqual(new Vector4(3,1,3,4))).toBe(true)
        expect(vec.zxwx.isEqual(new Vector4(3,1,4,1))).toBe(true)
        expect(vec.zxwy.isEqual(new Vector4(3,1,4,2))).toBe(true)
        expect(vec.zxwz.isEqual(new Vector4(3,1,4,3))).toBe(true)
        expect(vec.zxww.isEqual(new Vector4(3,1,4,4))).toBe(true)
        expect(vec.zyxx.isEqual(new Vector4(3,2,1,1))).toBe(true)
        expect(vec.zyxy.isEqual(new Vector4(3,2,1,2))).toBe(true)
        expect(vec.zyxz.isEqual(new Vector4(3,2,1,3))).toBe(true)
        expect(vec.zyxw.isEqual(new Vector4(3,2,1,4))).toBe(true)
        expect(vec.zyyx.isEqual(new Vector4(3,2,2,1))).toBe(true)
        expect(vec.zyyy.isEqual(new Vector4(3,2,2,2))).toBe(true)
        expect(vec.zyyz.isEqual(new Vector4(3,2,2,3))).toBe(true)
        expect(vec.zyyw.isEqual(new Vector4(3,2,2,4))).toBe(true)
        expect(vec.zyzx.isEqual(new Vector4(3,2,3,1))).toBe(true)
        expect(vec.zyzy.isEqual(new Vector4(3,2,3,2))).toBe(true)
        expect(vec.zyzz.isEqual(new Vector4(3,2,3,3))).toBe(true)
        expect(vec.zyzw.isEqual(new Vector4(3,2,3,4))).toBe(true)
        expect(vec.zywx.isEqual(new Vector4(3,2,4,1))).toBe(true)
        expect(vec.zywy.isEqual(new Vector4(3,2,4,2))).toBe(true)
        expect(vec.zywz.isEqual(new Vector4(3,2,4,3))).toBe(true)
        expect(vec.zyww.isEqual(new Vector4(3,2,4,4))).toBe(true)
        expect(vec.zzxx.isEqual(new Vector4(3,3,1,1))).toBe(true)
        expect(vec.zzxy.isEqual(new Vector4(3,3,1,2))).toBe(true)
        expect(vec.zzxz.isEqual(new Vector4(3,3,1,3))).toBe(true)
        expect(vec.zzxw.isEqual(new Vector4(3,3,1,4))).toBe(true)
        expect(vec.zzyx.isEqual(new Vector4(3,3,2,1))).toBe(true)
        expect(vec.zzyy.isEqual(new Vector4(3,3,2,2))).toBe(true)
        expect(vec.zzyz.isEqual(new Vector4(3,3,2,3))).toBe(true)
        expect(vec.zzyw.isEqual(new Vector4(3,3,2,4))).toBe(true)
        expect(vec.zzzx.isEqual(new Vector4(3,3,3,1))).toBe(true)
        expect(vec.zzzy.isEqual(new Vector4(3,3,3,2))).toBe(true)
        expect(vec.zzzz.isEqual(new Vector4(3,3,3,3))).toBe(true)
        expect(vec.zzzw.isEqual(new Vector4(3,3,3,4))).toBe(true)
        expect(vec.zzwx.isEqual(new Vector4(3,3,4,1))).toBe(true)
        expect(vec.zzwy.isEqual(new Vector4(3,3,4,2))).toBe(true)
        expect(vec.zzwz.isEqual(new Vector4(3,3,4,3))).toBe(true)
        expect(vec.zzww.isEqual(new Vector4(3,3,4,4))).toBe(true)
        expect(vec.zwxx.isEqual(new Vector4(3,4,1,1))).toBe(true)
        expect(vec.zwxy.isEqual(new Vector4(3,4,1,2))).toBe(true)
        expect(vec.zwxz.isEqual(new Vector4(3,4,1,3))).toBe(true)
        expect(vec.zwxw.isEqual(new Vector4(3,4,1,4))).toBe(true)
        expect(vec.zwyx.isEqual(new Vector4(3,4,2,1))).toBe(true)
        expect(vec.zwyy.isEqual(new Vector4(3,4,2,2))).toBe(true)
        expect(vec.zwyz.isEqual(new Vector4(3,4,2,3))).toBe(true)
        expect(vec.zwyw.isEqual(new Vector4(3,4,2,4))).toBe(true)
        expect(vec.zwzx.isEqual(new Vector4(3,4,3,1))).toBe(true)
        expect(vec.zwzy.isEqual(new Vector4(3,4,3,2))).toBe(true)
        expect(vec.zwzz.isEqual(new Vector4(3,4,3,3))).toBe(true)
        expect(vec.zwzw.isEqual(new Vector4(3,4,3,4))).toBe(true)
        expect(vec.zwwx.isEqual(new Vector4(3,4,4,1))).toBe(true)
        expect(vec.zwwy.isEqual(new Vector4(3,4,4,2))).toBe(true)
        expect(vec.zwwz.isEqual(new Vector4(3,4,4,3))).toBe(true)
        expect(vec.zwww.isEqual(new Vector4(3,4,4,4))).toBe(true)
        expect(vec.wxxx.isEqual(new Vector4(4,1,1,1))).toBe(true)
        expect(vec.wxxy.isEqual(new Vector4(4,1,1,2))).toBe(true)
        expect(vec.wxxz.isEqual(new Vector4(4,1,1,3))).toBe(true)
        expect(vec.wxxw.isEqual(new Vector4(4,1,1,4))).toBe(true)
        expect(vec.wxyx.isEqual(new Vector4(4,1,2,1))).toBe(true)
        expect(vec.wxyy.isEqual(new Vector4(4,1,2,2))).toBe(true)
        expect(vec.wxyz.isEqual(new Vector4(4,1,2,3))).toBe(true)
        expect(vec.wxyw.isEqual(new Vector4(4,1,2,4))).toBe(true)
        expect(vec.wxzx.isEqual(new Vector4(4,1,3,1))).toBe(true)
        expect(vec.wxzy.isEqual(new Vector4(4,1,3,2))).toBe(true)
        expect(vec.wxzz.isEqual(new Vector4(4,1,3,3))).toBe(true)
        expect(vec.wxzw.isEqual(new Vector4(4,1,3,4))).toBe(true)
        expect(vec.wxwx.isEqual(new Vector4(4,1,4,1))).toBe(true)
        expect(vec.wxwy.isEqual(new Vector4(4,1,4,2))).toBe(true)
        expect(vec.wxwz.isEqual(new Vector4(4,1,4,3))).toBe(true)
        expect(vec.wxww.isEqual(new Vector4(4,1,4,4))).toBe(true)
        expect(vec.wyxx.isEqual(new Vector4(4,2,1,1))).toBe(true)
        expect(vec.wyxy.isEqual(new Vector4(4,2,1,2))).toBe(true)
        expect(vec.wyxz.isEqual(new Vector4(4,2,1,3))).toBe(true)
        expect(vec.wyxw.isEqual(new Vector4(4,2,1,4))).toBe(true)
        expect(vec.wyyx.isEqual(new Vector4(4,2,2,1))).toBe(true)
        expect(vec.wyyy.isEqual(new Vector4(4,2,2,2))).toBe(true)
        expect(vec.wyyz.isEqual(new Vector4(4,2,2,3))).toBe(true)
        expect(vec.wyyw.isEqual(new Vector4(4,2,2,4))).toBe(true)
        expect(vec.wyzx.isEqual(new Vector4(4,2,3,1))).toBe(true)
        expect(vec.wyzy.isEqual(new Vector4(4,2,3,2))).toBe(true)
        expect(vec.wyzz.isEqual(new Vector4(4,2,3,3))).toBe(true)
        expect(vec.wyzw.isEqual(new Vector4(4,2,3,4))).toBe(true)
        expect(vec.wywx.isEqual(new Vector4(4,2,4,1))).toBe(true)
        expect(vec.wywy.isEqual(new Vector4(4,2,4,2))).toBe(true)
        expect(vec.wywz.isEqual(new Vector4(4,2,4,3))).toBe(true)
        expect(vec.wyww.isEqual(new Vector4(4,2,4,4))).toBe(true)
        expect(vec.wzxx.isEqual(new Vector4(4,3,1,1))).toBe(true)
        expect(vec.wzxy.isEqual(new Vector4(4,3,1,2))).toBe(true)
        expect(vec.wzxz.isEqual(new Vector4(4,3,1,3))).toBe(true)
        expect(vec.wzxw.isEqual(new Vector4(4,3,1,4))).toBe(true)
        expect(vec.wzyx.isEqual(new Vector4(4,3,2,1))).toBe(true)
        expect(vec.wzyy.isEqual(new Vector4(4,3,2,2))).toBe(true)
        expect(vec.wzyz.isEqual(new Vector4(4,3,2,3))).toBe(true)
        expect(vec.wzyw.isEqual(new Vector4(4,3,2,4))).toBe(true)
        expect(vec.wzzx.isEqual(new Vector4(4,3,3,1))).toBe(true)
        expect(vec.wzzy.isEqual(new Vector4(4,3,3,2))).toBe(true)
        expect(vec.wzzz.isEqual(new Vector4(4,3,3,3))).toBe(true)
        expect(vec.wzzw.isEqual(new Vector4(4,3,3,4))).toBe(true)
        expect(vec.wzwx.isEqual(new Vector4(4,3,4,1))).toBe(true)
        expect(vec.wzwy.isEqual(new Vector4(4,3,4,2))).toBe(true)
        expect(vec.wzwz.isEqual(new Vector4(4,3,4,3))).toBe(true)
        expect(vec.wzww.isEqual(new Vector4(4,3,4,4))).toBe(true)
        expect(vec.wwxx.isEqual(new Vector4(4,4,1,1))).toBe(true)
        expect(vec.wwxy.isEqual(new Vector4(4,4,1,2))).toBe(true)
        expect(vec.wwxz.isEqual(new Vector4(4,4,1,3))).toBe(true)
        expect(vec.wwxw.isEqual(new Vector4(4,4,1,4))).toBe(true)
        expect(vec.wwyx.isEqual(new Vector4(4,4,2,1))).toBe(true)
        expect(vec.wwyy.isEqual(new Vector4(4,4,2,2))).toBe(true)
        expect(vec.wwyz.isEqual(new Vector4(4,4,2,3))).toBe(true)
        expect(vec.wwyw.isEqual(new Vector4(4,4,2,4))).toBe(true)
        expect(vec.wwzx.isEqual(new Vector4(4,4,3,1))).toBe(true)
        expect(vec.wwzy.isEqual(new Vector4(4,4,3,2))).toBe(true)
        expect(vec.wwzz.isEqual(new Vector4(4,4,3,3))).toBe(true)
        expect(vec.wwzw.isEqual(new Vector4(4,4,3,4))).toBe(true)
        expect(vec.wwwx.isEqual(new Vector4(4,4,4,1))).toBe(true)
        expect(vec.wwwy.isEqual(new Vector4(4,4,4,2))).toBe(true)
        expect(vec.wwwz.isEqual(new Vector4(4,4,4,3))).toBe(true)
        expect(vec.wwww.isEqual(new Vector4(4,4,4,4))).toBe(true)
    });
    test("Swizzle Setters", () => {
        const arr = [1,2,3,4]
        const vec = Vector4.fromArray(arr)
        const vec2 = Vector4.fromArray(arr)

        vec2.x = vec.x; vec2.y = vec.y; vec2.z = vec.z; vec2.w = vec.w;
        expect(vec2.isEqual(vec)).toBe(true)
        vec2.xyzw = arr; expect(vec2.xyzw.isEqual(vec)).toBe(true)
        vec2.xywz = arr; expect(vec2.xywz.isEqual(vec)).toBe(true)
        vec2.xzyw = arr; expect(vec2.xzyw.isEqual(vec)).toBe(true)
        vec2.xzwy = arr; expect(vec2.xzwy.isEqual(vec)).toBe(true)
        vec2.xwyz = arr; expect(vec2.xwyz.isEqual(vec)).toBe(true)
        vec2.xwzy = arr; expect(vec2.xwzy.isEqual(vec)).toBe(true)
        vec2.yxzw = arr; expect(vec2.yxzw.isEqual(vec)).toBe(true)
        vec2.yxwz = arr; expect(vec2.yxwz.isEqual(vec)).toBe(true)
        vec2.yzxw = arr; expect(vec2.yzxw.isEqual(vec)).toBe(true)
        vec2.yzwx = arr; expect(vec2.yzwx.isEqual(vec)).toBe(true)
        vec2.ywxz = arr; expect(vec2.ywxz.isEqual(vec)).toBe(true)
        vec2.ywzx = arr; expect(vec2.ywzx.isEqual(vec)).toBe(true)
        vec2.zxyw = arr; expect(vec2.zxyw.isEqual(vec)).toBe(true)
        vec2.zxwy = arr; expect(vec2.zxwy.isEqual(vec)).toBe(true)
        vec2.zyxw = arr; expect(vec2.zyxw.isEqual(vec)).toBe(true)
        vec2.zywx = arr; expect(vec2.zywx.isEqual(vec)).toBe(true)
        vec2.zwxy = arr; expect(vec2.zwxy.isEqual(vec)).toBe(true)
        vec2.zwyx = arr; expect(vec2.zwyx.isEqual(vec)).toBe(true)
        vec2.wxyz = arr; expect(vec2.wxyz.isEqual(vec)).toBe(true)
        vec2.wxzy = arr; expect(vec2.wxzy.isEqual(vec)).toBe(true)
        vec2.wyxz = arr; expect(vec2.wyxz.isEqual(vec)).toBe(true)
        vec2.wyzx = arr; expect(vec2.wyzx.isEqual(vec)).toBe(true)
        vec2.wzxy = arr; expect(vec2.wzxy.isEqual(vec)).toBe(true)
        vec2.wzyx = arr; expect(vec2.wzyx.isEqual(vec)).toBe(true)
        
    });

    test("Addition and subtraction", () => {
        const vec1 = Vector4.ZERO();
        const vec2 = new Vector4(1,1,1,1);
        const vec3 = new Vector4(2,2,2,2);
        const vec4 = new Vector4(3,3,3,3);
        const vec5 = vec1.add(vec2);
        expect(vec5[0]).toBeCloseTo(1);
        expect(vec5[1]).toBeCloseTo(1);
        expect(vec1.add(vec2).isEqual(vec2)).toBe(true);
        expect(vec2.add(vec3).isEqual(vec4)).toBe(true);
        expect(vec2.sub(vec2).isEqual(vec1)).toBe(true);
    });
    test("Equals", () => {
        const vec1 = new Vector4(-1,-2,-3,-4)
        const vec2 = new Vector4(0,0,0,0)
        vec2.eq(vec1)
        expect(vec2.isEqual(vec1)).toBe(true)
        expect(vec2.isEqual(Vector4.ZERO())).toBe(false);
    });
    test("Dot", () => {
        const vec1 = new Vector4(0,1,0,0)
        const vec2 = new Vector4(1,0,0,0)
        expect(vec1.dot(vec2)).toBeCloseTo(0)
    });
    test("Rotate", () => {

    });
    test("Rotate Degrees", () => {

    });
    test("fromArray", () => {
        const vec = Vector4.fromArray([1,2,3,4]);
        expect(vec.x).toBeCloseTo(1);
        expect(vec.y).toBeCloseTo(2);
        expect(vec.z).toBeCloseTo(3);
        expect(vec.w).toBeCloseTo(4);
    });
    test("toString", () => {
        const vec = Vector4.fromArray([1,2,3,4]);
        vec[0] = Math.round(vec[0])
        vec[1] = Math.round(vec[1])
        vec[2] = Math.round(vec[2])
        vec[3] = Math.round(vec[3])
        expect(vec.toString()).toBe("1,2,3,4");
    });
    test("ZERO Vector", () => {
        const vec = Vector4.ZERO();
        expect(vec.x).toBe(0);
        expect(vec.y).toBe(0);
        expect(vec.z).toBe(0);
        expect(vec.w).toBe(0);
    });
});