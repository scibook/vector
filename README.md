# @scibook/vector

![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat)
![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat)
![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat)

**This library is currently under development and should not be used in production!** 

## Features
* Full swizzle support for 2/3/4 dimensional vectors (ie. vec.xyz , vec.zyxw )
* 100% code test coverage in Jest
* Written in TypeScript

## Usage example
```ts
import { Vector3 } from '@scibook/vector'

const vec = new Vector3(1,2,3)
const vec2 = vec.yzx    // All swizzles supported for 2/3/4d vectors!
const vec3 = Vector3.fromArray([-1,2,-5.222])

// Defined equality with tolerance for floating point values
vec.eq(vec2)
if(vec.isEqual(vec2)){
	const dot = vec.dot(vec2)
}

// Rotation support for radians and degrees
const rotate = vec.rotate(Math.PI)
const rotated = vec.rotateD(180)
```
## Development setup

Once you've cloned the repository:

```sh
npm i
npm run test
npm run build
```

## Release History

* 1.0.0 Initial Release
