enum Axis { // We add this as a static member after defining locally
    X,
    Y,
    Z,
}

export class BaseVector {
    [idx: number]: number
    private readonly size

    static Axis = Axis
    static readonly EPSILON = 0.01
    static readonly DEG2RAD = 0.0174533

    /**
     * Creates an n-dimensional vector and initializes its indices.
     * @param size - The dimension of this vector.
     */
    constructor(size: number) {
        this.size = size
        for (let i = 0; i < this.size; i++) {
            this[i] = 0
        }
    }

    /**
     * @returns The magnitude/length of this vector.
     */
    magnitude(): number {
        return Math.sqrt(this.sqrMagnitude())
    }

    /**
     * @returns The magnitude of this vector squared.
     */
    sqrMagnitude(): number {
        let t = 0
        for (let i = 0; i < this.size; i++) {
            t += this[i] * this[i]
        }
        return t
    }

    /**
     * Normalizes the vector to have a magnitude of ~1.
     */
    normalize(): void {
        const out = this.div(this.magnitude())
        for (let i = 0; i < this.size; i++) {
            this[i] = out[i]
        }
    }

    /**
     * (c=a/b) Divides the vector by a scalar value, non-mutating
     * @param scalar - The divisor
     * @returns A new vector with all components divided by the scalar.
     */
    div(scalar: number): BaseVector {
        const newvec = new BaseVector(this.size)
        for (let i = 0; i < this.size; i++) {
            newvec[i] = this[i] / scalar
        }
        return newvec
    }

    /**
     * (a/=b) Divides the vector by a scalar value, mutating
     * @param scalar - The divisor
     * @returns A new vector with all components divided by the scalar.
     */
    diveq(scalar: number): BaseVector {
        for (let i = 0; i < this.size; i++) {
            this[i] = this[i] / scalar
        }
        return this
    }

    /**
     * (c=a*b) Multiply a scalar by the calling vector, non-mutating
     * @param scalar - The scalar to multiply with
     * @returns A new vector with all components multiplied by the scalar.
     */
    mul(scalar: number): BaseVector {
        const newvec = new BaseVector(this.size)
        for (let i = 0; i < this.size; i++) {
            newvec[i] = this[i] * scalar
        }
        return newvec
    }

    /**
     * (a*=b) Multiply a scalar by the calling vector, mutating
     * @param scalar - The scalar to multiply with
     * @returns The calling vector
     */
    muleq(scalar: number): BaseVector {
        for (let i = 0; i < this.size; i++) {
            this[i] = this[i] * scalar
        }
        return this
    }

    /**
     * Add a vector to the calling vector, non-mutating
     * @param b - The vector to add to this vector.
     * @returns A new vector that is the sum of this vector and b.
     */
    add(b: BaseVector): BaseVector {
        const newvec = new BaseVector(this.size)
        for (let i = 0; i < this.size; i++) {
            newvec[i] = this[i] + b[i]
        }
        return newvec
    }

    /**
     * (a+=b) Add a vector to the calling vector, mutating
     * @param b - The vector to add to this vector
     * @returns The calling vector instance
     */
    addeq(b: BaseVector): BaseVector {
        for (let i = 0; i < this.size; i++) {
            this[i] = this[i] + b[i]
        }
        return this
    }

    /**
     * (c=a-b) Subtract a vector from the calling vector, non-mutating
     * @param b - The vector to subtract from this vector
     * @returns A new vector that is the difference of this vector and b
     */
    sub(b: BaseVector): BaseVector {
        const newvec = new BaseVector(this.size)
        for (let i = 0; i < this.size; i++) {
            newvec[i] = this[i] - b[i]
        }
        return newvec
    }

    /**
     * (a-=b) Subtract a vector from the calling vector, mutating
     * @param b - The vector to subtract from this vector
     * @returns The calling vector instance
     */
    subeq(b: BaseVector): BaseVector {
        for (let i = 0; i < this.size; i++) {
            this[i] = this[i] - b[i]
        }
        return this
    }

    /**
     * Sets this current vector as equal to vector b.
     * @param b - The vector to set this vector equal to.
     */
    eq(b: BaseVector): void {
        for (let i = 0; i < this.size; i++) {
            this[i] = b[i]
        }
    }

    /**
     * @param b - The vector to check this vector's equality against.
     * @returns True if they are approximately equal, false if they are not.
     */
    isEqual(b: BaseVector): boolean {
        for (let i = 0; i < this.size; i++) {
            if (Math.abs(b[0] - this[0]) > BaseVector.EPSILON) {
                return false
            }
        }
        return true
    }

    /**
     * Computes the dot product on this vector and b.
     * @param b - The second vector involved in the dot product operation.
     * @returns A scalar value representing how perpendicular the vectors are to one another. Zero represents 90 degrees.
     */
    dot(b: BaseVector): number {
        let acc = 0
        for (let i = 0; i < this.size; i++) {
            acc += this[i] * b[i]
        }
        return acc
    }

    /**
     * Get the distance between two vectors
     * @param b - The vector we are taking the distance to
     * @returns A scalar representing the distance between vectors
     */
    distance(b: BaseVector): number {
        return this.sub(b).magnitude()
    }

    /**
     * @returns A string formatted 'x,y'.
     */
    toString(): string {
        let str = ''
        for (let i = 0; i < this.size; i++) {
            str += this[i] + ','
        }
        return str.substring(0, str.length - 1)
    }
}
