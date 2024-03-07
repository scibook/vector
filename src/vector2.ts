import { BaseVector } from './basevector'

/**
 * Represents a 2d vector whie being an extension of the array class.
 */
export class Vector2 extends BaseVector {
    /**
     * Construct a 2d vector with set x and y components.
     * @param x - The x component
     * @param y - The y component
     */
    public constructor(x: number, y: number) {
        super(2)
        this[0] = x
        this[1] = y
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
    get xy(): Vector2 {
        return Vector2.fromArray([this[0], this[1]])
    }
    set xy(value: Vector2 | number[]) {
        this[0] = value[0]
        this[1] = value[1]
    }
    get yx(): Vector2 {
        return Vector2.fromArray([this[1], this[0]])
    }
    set yx(value: Vector2 | number[]) {
        this[0] = value[1]
        this[1] = value[0]
    }
    get xx(): Vector2 {
        return Vector2.fromArray([this[0], this[0]])
    }
    set xx(value: Vector2 | number[]) {
        this[0] = value[0]
        this[1] = value[0]
    }
    get yy(): Vector2 {
        return Vector2.fromArray([this[1], this[1]])
    }
    set yy(value: Vector2 | number[]) {
        this[0] = value[1]
        this[1] = value[1]
    }

    /**
     * Rotate this vector theta radians along the x axis.
     * @param theta - Angle in radians.
     * @returns The new rotated vector.
     */
    rotate(theta: number): Vector2 {
        const x1 = this[0] * Math.cos(theta) - this[1] * Math.sin(theta)
        const x2 = this[0] * Math.sin(theta) + this[1] * Math.cos(theta)
        return new Vector2(x1, x2)
    }

    /**
     * Rotate this vector theta degrees along the x axis.
     * @param degrees - Angle in degrees.
     * @returns The new rotated vector.
     */
    rotateD(degrees: number): Vector2 {
        return this.rotate(degrees * Vector2.DEG2RAD)
    }

    /**
     * @param arr - An array with at least 2 elements.
     * @returns A Vector2d object where the x,y components are arr[0]=x , arr[1]=y.
     */
    static fromArray(arr: number[]): Vector2 {
        return new Vector2(arr[0], arr[1])
    }

    /**
     * @returns A zero vector.
     */
    static ZERO(): Vector2 {
        return new Vector2(0, 0)
    }
}
