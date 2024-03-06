import { BaseVector } from './basevector'

export class Vector3 extends BaseVector {
    /**
     * Construct a 3d vector with set x and y components.
     * @param x - The x component
     * @param y - The y component
     * @param z - The z component
     */
    public constructor(x = 0, y = 0, z = 0) {
        super(3)
        this[0] = x
        this[1] = y
        this[2] = z
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

    /**
     * @param arr - An array with at least 3 elements.
     * @returns A Vector2d object where the x,y components are arr[0]=x , arr[1]=y.
     */
    static fromArray(arr: number[]): Vector3 {
        return new Vector3(arr[0], arr[1], arr[2])
    }

    /**
     * @returns A zero vector.
     */
    static ZERO(): Vector3 {
        return new Vector3(0, 0, 0)
    }

    // My apologies
    get xxx(): Vector3 {
        return Vector3.fromArray([this[0], this[0], this[0]])
    }
    get xxy(): Vector3 {
        return Vector3.fromArray([this[0], this[0], this[1]])
    }
    get xxz(): Vector3 {
        return Vector3.fromArray([this[0], this[0], this[2]])
    }
    get xyx(): Vector3 {
        return Vector3.fromArray([this[0], this[1], this[0]])
    }
    get xyy(): Vector3 {
        return Vector3.fromArray([this[0], this[1], this[1]])
    }
    get xyz(): Vector3 {
        return Vector3.fromArray([this[0], this[1], this[2]])
    }
    set xyz(value: Vector3 | number[]) {
        this[0] = value[0]
        this[1] = value[1]
        this[2] = value[2]
    }
    get xzx(): Vector3 {
        return Vector3.fromArray([this[0], this[2], this[0]])
    }
    get xzy(): Vector3 {
        return Vector3.fromArray([this[0], this[2], this[1]])
    }
    set xzy(value: Vector3 | number[]) {
        this[0] = value[0]
        this[2] = value[1]
        this[1] = value[2]
    }
    get xzz(): Vector3 {
        return Vector3.fromArray([this[0], this[2], this[2]])
    }
    get yxx(): Vector3 {
        return Vector3.fromArray([this[1], this[0], this[0]])
    }
    get yxy(): Vector3 {
        return Vector3.fromArray([this[1], this[0], this[1]])
    }
    get yxz(): Vector3 {
        return Vector3.fromArray([this[1], this[0], this[2]])
    }
    set yxz(value: Vector3 | number[]) {
        this[1] = value[0]
        this[0] = value[1]
        this[2] = value[2]
    }
    get yyx(): Vector3 {
        return Vector3.fromArray([this[1], this[1], this[0]])
    }
    get yyy(): Vector3 {
        return Vector3.fromArray([this[1], this[1], this[1]])
    }
    get yyz(): Vector3 {
        return Vector3.fromArray([this[1], this[1], this[2]])
    }
    get yzx(): Vector3 {
        return Vector3.fromArray([this[1], this[2], this[0]])
    }
    set yzx(value: Vector3 | number[]) {
        this[1] = value[0]
        this[2] = value[1]
        this[0] = value[2]
    }
    get yzy(): Vector3 {
        return Vector3.fromArray([this[1], this[2], this[1]])
    }
    get yzz(): Vector3 {
        return Vector3.fromArray([this[1], this[2], this[2]])
    }
    get zxx(): Vector3 {
        return Vector3.fromArray([this[2], this[0], this[0]])
    }
    get zxy(): Vector3 {
        return Vector3.fromArray([this[2], this[0], this[1]])
    }
    set zxy(value: Vector3 | number[]) {
        this[2] = value[0]
        this[0] = value[1]
        this[1] = value[2]
    }
    get zxz(): Vector3 {
        return Vector3.fromArray([this[2], this[0], this[2]])
    }
    get zyx(): Vector3 {
        return Vector3.fromArray([this[2], this[1], this[0]])
    }
    set zyx(value: Vector3 | number[]) {
        this[2] = value[0]
        this[1] = value[1]
        this[0] = value[2]
    }
    get zyy(): Vector3 {
        return Vector3.fromArray([this[2], this[1], this[1]])
    }
    get zyz(): Vector3 {
        return Vector3.fromArray([this[2], this[1], this[2]])
    }
    get zzx(): Vector3 {
        return Vector3.fromArray([this[2], this[2], this[0]])
    }
    get zzy(): Vector3 {
        return Vector3.fromArray([this[2], this[2], this[1]])
    }
    get zzz(): Vector3 {
        return Vector3.fromArray([this[2], this[2], this[2]])
    }
}
