import { BaseVector } from './basevector'

export class Vector4 extends BaseVector {
    /**
     * Construct a 3d vector with set x and y components.
     * @param x - The x component
     * @param y - The y component
     * @param z - The z component
     */
    public constructor(x = 0, y = 0, z = 0, w = 0) {
        super(4)
        this[0] = x
        this[1] = y
        this[2] = z
        this[3] = w
    }
    get x(): number {
        return this[0]
    }
    set x(value: number) {
        this[0] = value
    }
    get y(): number {
        return this[1]
    }
    set y(value: number) {
        this[1] = value
    }
    get z(): number {
        return this[2]
    }
    set z(value: number) {
        this[2] = value
    }

    get w(): number {
        return this[3]
    }
    set w(value: number) {
        this[3] = value
    }

    /**
     * @param arr - An array with at least 3 elements.
     * @returns A Vector2d object where the x,y components are arr[0]=x , arr[1]=y.
     */
    static fromArray(arr: number[]): Vector4 {
        return new Vector4(arr[0], arr[1], arr[2], arr[3])
    }

    /**
     * @returns A zero vector.
     */
    static ZERO(): Vector4 {
        return new Vector4(0, 0, 0, 0)
    }

    // Sorry about this
    get xxxx(): Vector4 {
        return Vector4.fromArray([this[0], this[0], this[0], this[0]])
    }
    get xxxy(): Vector4 {
        return Vector4.fromArray([this[0], this[0], this[0], this[1]])
    }
    get xxxz(): Vector4 {
        return Vector4.fromArray([this[0], this[0], this[0], this[2]])
    }
    get xxxw(): Vector4 {
        return Vector4.fromArray([this[0], this[0], this[0], this[3]])
    }
    get xxyx(): Vector4 {
        return Vector4.fromArray([this[0], this[0], this[1], this[0]])
    }
    get xxyy(): Vector4 {
        return Vector4.fromArray([this[0], this[0], this[1], this[1]])
    }
    get xxyz(): Vector4 {
        return Vector4.fromArray([this[0], this[0], this[1], this[2]])
    }
    get xxyw(): Vector4 {
        return Vector4.fromArray([this[0], this[0], this[1], this[3]])
    }
    get xxzx(): Vector4 {
        return Vector4.fromArray([this[0], this[0], this[2], this[0]])
    }
    get xxzy(): Vector4 {
        return Vector4.fromArray([this[0], this[0], this[2], this[1]])
    }
    get xxzz(): Vector4 {
        return Vector4.fromArray([this[0], this[0], this[2], this[2]])
    }
    get xxzw(): Vector4 {
        return Vector4.fromArray([this[0], this[0], this[2], this[3]])
    }
    get xxwx(): Vector4 {
        return Vector4.fromArray([this[0], this[0], this[3], this[0]])
    }
    get xxwy(): Vector4 {
        return Vector4.fromArray([this[0], this[0], this[3], this[1]])
    }
    get xxwz(): Vector4 {
        return Vector4.fromArray([this[0], this[0], this[3], this[2]])
    }
    get xxww(): Vector4 {
        return Vector4.fromArray([this[0], this[0], this[3], this[3]])
    }
    get xyxx(): Vector4 {
        return Vector4.fromArray([this[0], this[1], this[0], this[0]])
    }
    get xyxy(): Vector4 {
        return Vector4.fromArray([this[0], this[1], this[0], this[1]])
    }
    get xyxz(): Vector4 {
        return Vector4.fromArray([this[0], this[1], this[0], this[2]])
    }
    get xyxw(): Vector4 {
        return Vector4.fromArray([this[0], this[1], this[0], this[3]])
    }
    get xyyx(): Vector4 {
        return Vector4.fromArray([this[0], this[1], this[1], this[0]])
    }
    get xyyy(): Vector4 {
        return Vector4.fromArray([this[0], this[1], this[1], this[1]])
    }
    get xyyz(): Vector4 {
        return Vector4.fromArray([this[0], this[1], this[1], this[2]])
    }
    get xyyw(): Vector4 {
        return Vector4.fromArray([this[0], this[1], this[1], this[3]])
    }
    get xyzx(): Vector4 {
        return Vector4.fromArray([this[0], this[1], this[2], this[0]])
    }
    get xyzy(): Vector4 {
        return Vector4.fromArray([this[0], this[1], this[2], this[1]])
    }
    get xyzz(): Vector4 {
        return Vector4.fromArray([this[0], this[1], this[2], this[2]])
    }
    get xyzw(): Vector4 {
        return Vector4.fromArray([this[0], this[1], this[2], this[3]])
    }
    set xyzw(value: Vector4 | number[]) {
        this[0] = value[0]
        this[1] = value[1]
        this[2] = value[2]
        this[3] = value[3]
    }
    get xywx(): Vector4 {
        return Vector4.fromArray([this[0], this[1], this[3], this[0]])
    }
    get xywy(): Vector4 {
        return Vector4.fromArray([this[0], this[1], this[3], this[1]])
    }
    get xywz(): Vector4 {
        return Vector4.fromArray([this[0], this[1], this[3], this[2]])
    }
    set xywz(value: Vector4 | number[]) {
        this[0] = value[0]
        this[1] = value[1]
        this[3] = value[2]
        this[2] = value[3]
    }
    get xyww(): Vector4 {
        return Vector4.fromArray([this[0], this[1], this[3], this[3]])
    }
    get xzxx(): Vector4 {
        return Vector4.fromArray([this[0], this[2], this[0], this[0]])
    }
    get xzxy(): Vector4 {
        return Vector4.fromArray([this[0], this[2], this[0], this[1]])
    }
    get xzxz(): Vector4 {
        return Vector4.fromArray([this[0], this[2], this[0], this[2]])
    }
    get xzxw(): Vector4 {
        return Vector4.fromArray([this[0], this[2], this[0], this[3]])
    }
    get xzyx(): Vector4 {
        return Vector4.fromArray([this[0], this[2], this[1], this[0]])
    }
    get xzyy(): Vector4 {
        return Vector4.fromArray([this[0], this[2], this[1], this[1]])
    }
    get xzyz(): Vector4 {
        return Vector4.fromArray([this[0], this[2], this[1], this[2]])
    }
    get xzyw(): Vector4 {
        return Vector4.fromArray([this[0], this[2], this[1], this[3]])
    }
    set xzyw(value: Vector4 | number[]) {
        this[0] = value[0]
        this[2] = value[1]
        this[1] = value[2]
        this[3] = value[3]
    }
    get xzzx(): Vector4 {
        return Vector4.fromArray([this[0], this[2], this[2], this[0]])
    }
    get xzzy(): Vector4 {
        return Vector4.fromArray([this[0], this[2], this[2], this[1]])
    }
    get xzzz(): Vector4 {
        return Vector4.fromArray([this[0], this[2], this[2], this[2]])
    }
    get xzzw(): Vector4 {
        return Vector4.fromArray([this[0], this[2], this[2], this[3]])
    }
    get xzwx(): Vector4 {
        return Vector4.fromArray([this[0], this[2], this[3], this[0]])
    }
    get xzwy(): Vector4 {
        return Vector4.fromArray([this[0], this[2], this[3], this[1]])
    }
    set xzwy(value: Vector4 | number[]) {
        this[0] = value[0]
        this[2] = value[1]
        this[3] = value[2]
        this[1] = value[3]
    }
    get xzwz(): Vector4 {
        return Vector4.fromArray([this[0], this[2], this[3], this[2]])
    }
    get xzww(): Vector4 {
        return Vector4.fromArray([this[0], this[2], this[3], this[3]])
    }
    get xwxx(): Vector4 {
        return Vector4.fromArray([this[0], this[3], this[0], this[0]])
    }
    get xwxy(): Vector4 {
        return Vector4.fromArray([this[0], this[3], this[0], this[1]])
    }
    get xwxz(): Vector4 {
        return Vector4.fromArray([this[0], this[3], this[0], this[2]])
    }
    get xwxw(): Vector4 {
        return Vector4.fromArray([this[0], this[3], this[0], this[3]])
    }
    get xwyx(): Vector4 {
        return Vector4.fromArray([this[0], this[3], this[1], this[0]])
    }
    get xwyy(): Vector4 {
        return Vector4.fromArray([this[0], this[3], this[1], this[1]])
    }
    get xwyz(): Vector4 {
        return Vector4.fromArray([this[0], this[3], this[1], this[2]])
    }
    set xwyz(value: Vector4 | number[]) {
        this[0] = value[0]
        this[3] = value[1]
        this[1] = value[2]
        this[2] = value[3]
    }
    get xwyw(): Vector4 {
        return Vector4.fromArray([this[0], this[3], this[1], this[3]])
    }
    get xwzx(): Vector4 {
        return Vector4.fromArray([this[0], this[3], this[2], this[0]])
    }
    get xwzy(): Vector4 {
        return Vector4.fromArray([this[0], this[3], this[2], this[1]])
    }
    set xwzy(value: Vector4 | number[]) {
        this[0] = value[0]
        this[3] = value[1]
        this[2] = value[2]
        this[1] = value[3]
    }
    get xwzz(): Vector4 {
        return Vector4.fromArray([this[0], this[3], this[2], this[2]])
    }
    get xwzw(): Vector4 {
        return Vector4.fromArray([this[0], this[3], this[2], this[3]])
    }
    get xwwx(): Vector4 {
        return Vector4.fromArray([this[0], this[3], this[3], this[0]])
    }
    get xwwy(): Vector4 {
        return Vector4.fromArray([this[0], this[3], this[3], this[1]])
    }
    get xwwz(): Vector4 {
        return Vector4.fromArray([this[0], this[3], this[3], this[2]])
    }
    get xwww(): Vector4 {
        return Vector4.fromArray([this[0], this[3], this[3], this[3]])
    }
    get yxxx(): Vector4 {
        return Vector4.fromArray([this[1], this[0], this[0], this[0]])
    }
    get yxxy(): Vector4 {
        return Vector4.fromArray([this[1], this[0], this[0], this[1]])
    }
    get yxxz(): Vector4 {
        return Vector4.fromArray([this[1], this[0], this[0], this[2]])
    }
    get yxxw(): Vector4 {
        return Vector4.fromArray([this[1], this[0], this[0], this[3]])
    }
    get yxyx(): Vector4 {
        return Vector4.fromArray([this[1], this[0], this[1], this[0]])
    }
    get yxyy(): Vector4 {
        return Vector4.fromArray([this[1], this[0], this[1], this[1]])
    }
    get yxyz(): Vector4 {
        return Vector4.fromArray([this[1], this[0], this[1], this[2]])
    }
    get yxyw(): Vector4 {
        return Vector4.fromArray([this[1], this[0], this[1], this[3]])
    }
    get yxzx(): Vector4 {
        return Vector4.fromArray([this[1], this[0], this[2], this[0]])
    }
    get yxzy(): Vector4 {
        return Vector4.fromArray([this[1], this[0], this[2], this[1]])
    }
    get yxzz(): Vector4 {
        return Vector4.fromArray([this[1], this[0], this[2], this[2]])
    }
    get yxzw(): Vector4 {
        return Vector4.fromArray([this[1], this[0], this[2], this[3]])
    }
    set yxzw(value: Vector4 | number[]) {
        this[1] = value[0]
        this[0] = value[1]
        this[2] = value[2]
        this[3] = value[3]
    }
    get yxwx(): Vector4 {
        return Vector4.fromArray([this[1], this[0], this[3], this[0]])
    }
    get yxwy(): Vector4 {
        return Vector4.fromArray([this[1], this[0], this[3], this[1]])
    }
    get yxwz(): Vector4 {
        return Vector4.fromArray([this[1], this[0], this[3], this[2]])
    }
    set yxwz(value: Vector4 | number[]) {
        this[1] = value[0]
        this[0] = value[1]
        this[3] = value[2]
        this[2] = value[3]
    }
    get yxww(): Vector4 {
        return Vector4.fromArray([this[1], this[0], this[3], this[3]])
    }
    get yyxx(): Vector4 {
        return Vector4.fromArray([this[1], this[1], this[0], this[0]])
    }
    get yyxy(): Vector4 {
        return Vector4.fromArray([this[1], this[1], this[0], this[1]])
    }
    get yyxz(): Vector4 {
        return Vector4.fromArray([this[1], this[1], this[0], this[2]])
    }
    get yyxw(): Vector4 {
        return Vector4.fromArray([this[1], this[1], this[0], this[3]])
    }
    get yyyx(): Vector4 {
        return Vector4.fromArray([this[1], this[1], this[1], this[0]])
    }
    get yyyy(): Vector4 {
        return Vector4.fromArray([this[1], this[1], this[1], this[1]])
    }
    get yyyz(): Vector4 {
        return Vector4.fromArray([this[1], this[1], this[1], this[2]])
    }
    get yyyw(): Vector4 {
        return Vector4.fromArray([this[1], this[1], this[1], this[3]])
    }
    get yyzx(): Vector4 {
        return Vector4.fromArray([this[1], this[1], this[2], this[0]])
    }
    get yyzy(): Vector4 {
        return Vector4.fromArray([this[1], this[1], this[2], this[1]])
    }
    get yyzz(): Vector4 {
        return Vector4.fromArray([this[1], this[1], this[2], this[2]])
    }
    get yyzw(): Vector4 {
        return Vector4.fromArray([this[1], this[1], this[2], this[3]])
    }
    get yywx(): Vector4 {
        return Vector4.fromArray([this[1], this[1], this[3], this[0]])
    }
    get yywy(): Vector4 {
        return Vector4.fromArray([this[1], this[1], this[3], this[1]])
    }
    get yywz(): Vector4 {
        return Vector4.fromArray([this[1], this[1], this[3], this[2]])
    }
    get yyww(): Vector4 {
        return Vector4.fromArray([this[1], this[1], this[3], this[3]])
    }
    get yzxx(): Vector4 {
        return Vector4.fromArray([this[1], this[2], this[0], this[0]])
    }
    get yzxy(): Vector4 {
        return Vector4.fromArray([this[1], this[2], this[0], this[1]])
    }
    get yzxz(): Vector4 {
        return Vector4.fromArray([this[1], this[2], this[0], this[2]])
    }
    get yzxw(): Vector4 {
        return Vector4.fromArray([this[1], this[2], this[0], this[3]])
    }
    set yzxw(value: Vector4 | number[]) {
        this[1] = value[0]
        this[2] = value[1]
        this[0] = value[2]
        this[3] = value[3]
    }
    get yzyx(): Vector4 {
        return Vector4.fromArray([this[1], this[2], this[1], this[0]])
    }
    get yzyy(): Vector4 {
        return Vector4.fromArray([this[1], this[2], this[1], this[1]])
    }
    get yzyz(): Vector4 {
        return Vector4.fromArray([this[1], this[2], this[1], this[2]])
    }
    get yzyw(): Vector4 {
        return Vector4.fromArray([this[1], this[2], this[1], this[3]])
    }
    get yzzx(): Vector4 {
        return Vector4.fromArray([this[1], this[2], this[2], this[0]])
    }
    get yzzy(): Vector4 {
        return Vector4.fromArray([this[1], this[2], this[2], this[1]])
    }
    get yzzz(): Vector4 {
        return Vector4.fromArray([this[1], this[2], this[2], this[2]])
    }
    get yzzw(): Vector4 {
        return Vector4.fromArray([this[1], this[2], this[2], this[3]])
    }
    get yzwx(): Vector4 {
        return Vector4.fromArray([this[1], this[2], this[3], this[0]])
    }
    set yzwx(value: Vector4 | number[]) {
        this[1] = value[0]
        this[2] = value[1]
        this[3] = value[2]
        this[0] = value[3]
    }
    get yzwy(): Vector4 {
        return Vector4.fromArray([this[1], this[2], this[3], this[1]])
    }
    get yzwz(): Vector4 {
        return Vector4.fromArray([this[1], this[2], this[3], this[2]])
    }
    get yzww(): Vector4 {
        return Vector4.fromArray([this[1], this[2], this[3], this[3]])
    }
    get ywxx(): Vector4 {
        return Vector4.fromArray([this[1], this[3], this[0], this[0]])
    }
    get ywxy(): Vector4 {
        return Vector4.fromArray([this[1], this[3], this[0], this[1]])
    }
    get ywxz(): Vector4 {
        return Vector4.fromArray([this[1], this[3], this[0], this[2]])
    }
    set ywxz(value: Vector4 | number[]) {
        this[1] = value[0]
        this[3] = value[1]
        this[0] = value[2]
        this[2] = value[3]
    }
    get ywxw(): Vector4 {
        return Vector4.fromArray([this[1], this[3], this[0], this[3]])
    }
    get ywyx(): Vector4 {
        return Vector4.fromArray([this[1], this[3], this[1], this[0]])
    }
    get ywyy(): Vector4 {
        return Vector4.fromArray([this[1], this[3], this[1], this[1]])
    }
    get ywyz(): Vector4 {
        return Vector4.fromArray([this[1], this[3], this[1], this[2]])
    }
    get ywyw(): Vector4 {
        return Vector4.fromArray([this[1], this[3], this[1], this[3]])
    }
    get ywzx(): Vector4 {
        return Vector4.fromArray([this[1], this[3], this[2], this[0]])
    }
    set ywzx(value: Vector4 | number[]) {
        this[1] = value[0]
        this[3] = value[1]
        this[2] = value[2]
        this[0] = value[3]
    }
    get ywzy(): Vector4 {
        return Vector4.fromArray([this[1], this[3], this[2], this[1]])
    }
    get ywzz(): Vector4 {
        return Vector4.fromArray([this[1], this[3], this[2], this[2]])
    }
    get ywzw(): Vector4 {
        return Vector4.fromArray([this[1], this[3], this[2], this[3]])
    }
    get ywwx(): Vector4 {
        return Vector4.fromArray([this[1], this[3], this[3], this[0]])
    }
    get ywwy(): Vector4 {
        return Vector4.fromArray([this[1], this[3], this[3], this[1]])
    }
    get ywwz(): Vector4 {
        return Vector4.fromArray([this[1], this[3], this[3], this[2]])
    }
    get ywww(): Vector4 {
        return Vector4.fromArray([this[1], this[3], this[3], this[3]])
    }
    get zxxx(): Vector4 {
        return Vector4.fromArray([this[2], this[0], this[0], this[0]])
    }
    get zxxy(): Vector4 {
        return Vector4.fromArray([this[2], this[0], this[0], this[1]])
    }
    get zxxz(): Vector4 {
        return Vector4.fromArray([this[2], this[0], this[0], this[2]])
    }
    get zxxw(): Vector4 {
        return Vector4.fromArray([this[2], this[0], this[0], this[3]])
    }
    get zxyx(): Vector4 {
        return Vector4.fromArray([this[2], this[0], this[1], this[0]])
    }
    get zxyy(): Vector4 {
        return Vector4.fromArray([this[2], this[0], this[1], this[1]])
    }
    get zxyz(): Vector4 {
        return Vector4.fromArray([this[2], this[0], this[1], this[2]])
    }
    get zxyw(): Vector4 {
        return Vector4.fromArray([this[2], this[0], this[1], this[3]])
    }
    set zxyw(value: Vector4 | number[]) {
        this[2] = value[0]
        this[0] = value[1]
        this[1] = value[2]
        this[3] = value[3]
    }
    get zxzx(): Vector4 {
        return Vector4.fromArray([this[2], this[0], this[2], this[0]])
    }
    get zxzy(): Vector4 {
        return Vector4.fromArray([this[2], this[0], this[2], this[1]])
    }
    get zxzz(): Vector4 {
        return Vector4.fromArray([this[2], this[0], this[2], this[2]])
    }
    get zxzw(): Vector4 {
        return Vector4.fromArray([this[2], this[0], this[2], this[3]])
    }
    get zxwx(): Vector4 {
        return Vector4.fromArray([this[2], this[0], this[3], this[0]])
    }
    get zxwy(): Vector4 {
        return Vector4.fromArray([this[2], this[0], this[3], this[1]])
    }
    set zxwy(value: Vector4 | number[]) {
        this[2] = value[0]
        this[0] = value[1]
        this[3] = value[2]
        this[1] = value[3]
    }
    get zxwz(): Vector4 {
        return Vector4.fromArray([this[2], this[0], this[3], this[2]])
    }
    get zxww(): Vector4 {
        return Vector4.fromArray([this[2], this[0], this[3], this[3]])
    }
    get zyxx(): Vector4 {
        return Vector4.fromArray([this[2], this[1], this[0], this[0]])
    }
    get zyxy(): Vector4 {
        return Vector4.fromArray([this[2], this[1], this[0], this[1]])
    }
    get zyxz(): Vector4 {
        return Vector4.fromArray([this[2], this[1], this[0], this[2]])
    }
    get zyxw(): Vector4 {
        return Vector4.fromArray([this[2], this[1], this[0], this[3]])
    }
    set zyxw(value: Vector4 | number[]) {
        this[2] = value[0]
        this[1] = value[1]
        this[0] = value[2]
        this[3] = value[3]
    }
    get zyyx(): Vector4 {
        return Vector4.fromArray([this[2], this[1], this[1], this[0]])
    }
    get zyyy(): Vector4 {
        return Vector4.fromArray([this[2], this[1], this[1], this[1]])
    }
    get zyyz(): Vector4 {
        return Vector4.fromArray([this[2], this[1], this[1], this[2]])
    }
    get zyyw(): Vector4 {
        return Vector4.fromArray([this[2], this[1], this[1], this[3]])
    }
    get zyzx(): Vector4 {
        return Vector4.fromArray([this[2], this[1], this[2], this[0]])
    }
    get zyzy(): Vector4 {
        return Vector4.fromArray([this[2], this[1], this[2], this[1]])
    }
    get zyzz(): Vector4 {
        return Vector4.fromArray([this[2], this[1], this[2], this[2]])
    }
    get zyzw(): Vector4 {
        return Vector4.fromArray([this[2], this[1], this[2], this[3]])
    }
    get zywx(): Vector4 {
        return Vector4.fromArray([this[2], this[1], this[3], this[0]])
    }
    set zywx(value: Vector4 | number[]) {
        this[2] = value[0]
        this[1] = value[1]
        this[3] = value[2]
        this[0] = value[3]
    }
    get zywy(): Vector4 {
        return Vector4.fromArray([this[2], this[1], this[3], this[1]])
    }
    get zywz(): Vector4 {
        return Vector4.fromArray([this[2], this[1], this[3], this[2]])
    }
    get zyww(): Vector4 {
        return Vector4.fromArray([this[2], this[1], this[3], this[3]])
    }
    get zzxx(): Vector4 {
        return Vector4.fromArray([this[2], this[2], this[0], this[0]])
    }
    get zzxy(): Vector4 {
        return Vector4.fromArray([this[2], this[2], this[0], this[1]])
    }
    get zzxz(): Vector4 {
        return Vector4.fromArray([this[2], this[2], this[0], this[2]])
    }
    get zzxw(): Vector4 {
        return Vector4.fromArray([this[2], this[2], this[0], this[3]])
    }
    get zzyx(): Vector4 {
        return Vector4.fromArray([this[2], this[2], this[1], this[0]])
    }
    get zzyy(): Vector4 {
        return Vector4.fromArray([this[2], this[2], this[1], this[1]])
    }
    get zzyz(): Vector4 {
        return Vector4.fromArray([this[2], this[2], this[1], this[2]])
    }
    get zzyw(): Vector4 {
        return Vector4.fromArray([this[2], this[2], this[1], this[3]])
    }
    get zzzx(): Vector4 {
        return Vector4.fromArray([this[2], this[2], this[2], this[0]])
    }
    get zzzy(): Vector4 {
        return Vector4.fromArray([this[2], this[2], this[2], this[1]])
    }
    get zzzz(): Vector4 {
        return Vector4.fromArray([this[2], this[2], this[2], this[2]])
    }
    get zzzw(): Vector4 {
        return Vector4.fromArray([this[2], this[2], this[2], this[3]])
    }
    get zzwx(): Vector4 {
        return Vector4.fromArray([this[2], this[2], this[3], this[0]])
    }
    get zzwy(): Vector4 {
        return Vector4.fromArray([this[2], this[2], this[3], this[1]])
    }
    get zzwz(): Vector4 {
        return Vector4.fromArray([this[2], this[2], this[3], this[2]])
    }
    get zzww(): Vector4 {
        return Vector4.fromArray([this[2], this[2], this[3], this[3]])
    }
    get zwxx(): Vector4 {
        return Vector4.fromArray([this[2], this[3], this[0], this[0]])
    }
    get zwxy(): Vector4 {
        return Vector4.fromArray([this[2], this[3], this[0], this[1]])
    }
    set zwxy(value: Vector4 | number[]) {
        this[2] = value[0]
        this[3] = value[1]
        this[0] = value[2]
        this[1] = value[3]
    }
    get zwxz(): Vector4 {
        return Vector4.fromArray([this[2], this[3], this[0], this[2]])
    }
    get zwxw(): Vector4 {
        return Vector4.fromArray([this[2], this[3], this[0], this[3]])
    }
    get zwyx(): Vector4 {
        return Vector4.fromArray([this[2], this[3], this[1], this[0]])
    }
    set zwyx(value: Vector4 | number[]) {
        this[2] = value[0]
        this[3] = value[1]
        this[1] = value[2]
        this[0] = value[3]
    }
    get zwyy(): Vector4 {
        return Vector4.fromArray([this[2], this[3], this[1], this[1]])
    }
    get zwyz(): Vector4 {
        return Vector4.fromArray([this[2], this[3], this[1], this[2]])
    }
    get zwyw(): Vector4 {
        return Vector4.fromArray([this[2], this[3], this[1], this[3]])
    }
    get zwzx(): Vector4 {
        return Vector4.fromArray([this[2], this[3], this[2], this[0]])
    }
    get zwzy(): Vector4 {
        return Vector4.fromArray([this[2], this[3], this[2], this[1]])
    }
    get zwzz(): Vector4 {
        return Vector4.fromArray([this[2], this[3], this[2], this[2]])
    }
    get zwzw(): Vector4 {
        return Vector4.fromArray([this[2], this[3], this[2], this[3]])
    }
    get zwwx(): Vector4 {
        return Vector4.fromArray([this[2], this[3], this[3], this[0]])
    }
    get zwwy(): Vector4 {
        return Vector4.fromArray([this[2], this[3], this[3], this[1]])
    }
    get zwwz(): Vector4 {
        return Vector4.fromArray([this[2], this[3], this[3], this[2]])
    }
    get zwww(): Vector4 {
        return Vector4.fromArray([this[2], this[3], this[3], this[3]])
    }
    get wxxx(): Vector4 {
        return Vector4.fromArray([this[3], this[0], this[0], this[0]])
    }
    get wxxy(): Vector4 {
        return Vector4.fromArray([this[3], this[0], this[0], this[1]])
    }
    get wxxz(): Vector4 {
        return Vector4.fromArray([this[3], this[0], this[0], this[2]])
    }
    get wxxw(): Vector4 {
        return Vector4.fromArray([this[3], this[0], this[0], this[3]])
    }
    get wxyx(): Vector4 {
        return Vector4.fromArray([this[3], this[0], this[1], this[0]])
    }
    get wxyy(): Vector4 {
        return Vector4.fromArray([this[3], this[0], this[1], this[1]])
    }
    get wxyz(): Vector4 {
        return Vector4.fromArray([this[3], this[0], this[1], this[2]])
    }
    set wxyz(value: Vector4 | number[]) {
        this[3] = value[0]
        this[0] = value[1]
        this[1] = value[2]
        this[2] = value[3]
    }
    get wxyw(): Vector4 {
        return Vector4.fromArray([this[3], this[0], this[1], this[3]])
    }
    get wxzx(): Vector4 {
        return Vector4.fromArray([this[3], this[0], this[2], this[0]])
    }
    get wxzy(): Vector4 {
        return Vector4.fromArray([this[3], this[0], this[2], this[1]])
    }
    set wxzy(value: Vector4 | number[]) {
        this[3] = value[0]
        this[0] = value[1]
        this[2] = value[2]
        this[1] = value[3]
    }
    get wxzz(): Vector4 {
        return Vector4.fromArray([this[3], this[0], this[2], this[2]])
    }
    get wxzw(): Vector4 {
        return Vector4.fromArray([this[3], this[0], this[2], this[3]])
    }
    get wxwx(): Vector4 {
        return Vector4.fromArray([this[3], this[0], this[3], this[0]])
    }
    get wxwy(): Vector4 {
        return Vector4.fromArray([this[3], this[0], this[3], this[1]])
    }
    get wxwz(): Vector4 {
        return Vector4.fromArray([this[3], this[0], this[3], this[2]])
    }
    get wxww(): Vector4 {
        return Vector4.fromArray([this[3], this[0], this[3], this[3]])
    }
    get wyxx(): Vector4 {
        return Vector4.fromArray([this[3], this[1], this[0], this[0]])
    }
    get wyxy(): Vector4 {
        return Vector4.fromArray([this[3], this[1], this[0], this[1]])
    }
    get wyxz(): Vector4 {
        return Vector4.fromArray([this[3], this[1], this[0], this[2]])
    }
    set wyxz(value: Vector4 | number[]) {
        this[3] = value[0]
        this[1] = value[1]
        this[0] = value[2]
        this[2] = value[3]
    }
    get wyxw(): Vector4 {
        return Vector4.fromArray([this[3], this[1], this[0], this[3]])
    }
    get wyyx(): Vector4 {
        return Vector4.fromArray([this[3], this[1], this[1], this[0]])
    }
    get wyyy(): Vector4 {
        return Vector4.fromArray([this[3], this[1], this[1], this[1]])
    }
    get wyyz(): Vector4 {
        return Vector4.fromArray([this[3], this[1], this[1], this[2]])
    }
    get wyyw(): Vector4 {
        return Vector4.fromArray([this[3], this[1], this[1], this[3]])
    }
    get wyzx(): Vector4 {
        return Vector4.fromArray([this[3], this[1], this[2], this[0]])
    }
    set wyzx(value: Vector4 | number[]) {
        this[3] = value[0]
        this[1] = value[1]
        this[2] = value[2]
        this[0] = value[3]
    }
    get wyzy(): Vector4 {
        return Vector4.fromArray([this[3], this[1], this[2], this[1]])
    }
    get wyzz(): Vector4 {
        return Vector4.fromArray([this[3], this[1], this[2], this[2]])
    }
    get wyzw(): Vector4 {
        return Vector4.fromArray([this[3], this[1], this[2], this[3]])
    }
    get wywx(): Vector4 {
        return Vector4.fromArray([this[3], this[1], this[3], this[0]])
    }
    get wywy(): Vector4 {
        return Vector4.fromArray([this[3], this[1], this[3], this[1]])
    }
    get wywz(): Vector4 {
        return Vector4.fromArray([this[3], this[1], this[3], this[2]])
    }
    get wyww(): Vector4 {
        return Vector4.fromArray([this[3], this[1], this[3], this[3]])
    }
    get wzxx(): Vector4 {
        return Vector4.fromArray([this[3], this[2], this[0], this[0]])
    }
    get wzxy(): Vector4 {
        return Vector4.fromArray([this[3], this[2], this[0], this[1]])
    }
    set wzxy(value: Vector4 | number[]) {
        this[3] = value[0]
        this[2] = value[1]
        this[0] = value[2]
        this[1] = value[3]
    }
    get wzxz(): Vector4 {
        return Vector4.fromArray([this[3], this[2], this[0], this[2]])
    }
    get wzxw(): Vector4 {
        return Vector4.fromArray([this[3], this[2], this[0], this[3]])
    }
    get wzyx(): Vector4 {
        return Vector4.fromArray([this[3], this[2], this[1], this[0]])
    }
    set wzyx(value: Vector4 | number[]) {
        this[3] = value[0]
        this[2] = value[1]
        this[1] = value[2]
        this[0] = value[3]
    }
    get wzyy(): Vector4 {
        return Vector4.fromArray([this[3], this[2], this[1], this[1]])
    }
    get wzyz(): Vector4 {
        return Vector4.fromArray([this[3], this[2], this[1], this[2]])
    }
    get wzyw(): Vector4 {
        return Vector4.fromArray([this[3], this[2], this[1], this[3]])
    }
    get wzzx(): Vector4 {
        return Vector4.fromArray([this[3], this[2], this[2], this[0]])
    }
    get wzzy(): Vector4 {
        return Vector4.fromArray([this[3], this[2], this[2], this[1]])
    }
    get wzzz(): Vector4 {
        return Vector4.fromArray([this[3], this[2], this[2], this[2]])
    }
    get wzzw(): Vector4 {
        return Vector4.fromArray([this[3], this[2], this[2], this[3]])
    }
    get wzwx(): Vector4 {
        return Vector4.fromArray([this[3], this[2], this[3], this[0]])
    }
    get wzwy(): Vector4 {
        return Vector4.fromArray([this[3], this[2], this[3], this[1]])
    }
    get wzwz(): Vector4 {
        return Vector4.fromArray([this[3], this[2], this[3], this[2]])
    }
    get wzww(): Vector4 {
        return Vector4.fromArray([this[3], this[2], this[3], this[3]])
    }
    get wwxx(): Vector4 {
        return Vector4.fromArray([this[3], this[3], this[0], this[0]])
    }
    get wwxy(): Vector4 {
        return Vector4.fromArray([this[3], this[3], this[0], this[1]])
    }
    get wwxz(): Vector4 {
        return Vector4.fromArray([this[3], this[3], this[0], this[2]])
    }
    get wwxw(): Vector4 {
        return Vector4.fromArray([this[3], this[3], this[0], this[3]])
    }
    get wwyx(): Vector4 {
        return Vector4.fromArray([this[3], this[3], this[1], this[0]])
    }
    get wwyy(): Vector4 {
        return Vector4.fromArray([this[3], this[3], this[1], this[1]])
    }
    get wwyz(): Vector4 {
        return Vector4.fromArray([this[3], this[3], this[1], this[2]])
    }
    get wwyw(): Vector4 {
        return Vector4.fromArray([this[3], this[3], this[1], this[3]])
    }
    get wwzx(): Vector4 {
        return Vector4.fromArray([this[3], this[3], this[2], this[0]])
    }
    get wwzy(): Vector4 {
        return Vector4.fromArray([this[3], this[3], this[2], this[1]])
    }
    get wwzz(): Vector4 {
        return Vector4.fromArray([this[3], this[3], this[2], this[2]])
    }
    get wwzw(): Vector4 {
        return Vector4.fromArray([this[3], this[3], this[2], this[3]])
    }
    get wwwx(): Vector4 {
        return Vector4.fromArray([this[3], this[3], this[3], this[0]])
    }
    get wwwy(): Vector4 {
        return Vector4.fromArray([this[3], this[3], this[3], this[1]])
    }
    get wwwz(): Vector4 {
        return Vector4.fromArray([this[3], this[3], this[3], this[2]])
    }
    get wwww(): Vector4 {
        return Vector4.fromArray([this[3], this[3], this[3], this[3]])
    }
}
