<div align="center">

  ![logo](https://raw.githubusercontent.com/redpeacock78/gyokuto/master/docs/logo.svg)   

</div>
<p align="center">
  Gyokuto is simplifies array manipulation in Javascript.
</p>
<div align="center">

[![codecov](https://codecov.io/gh/redpeacock78/gyokuto/branch/refs/tags/v1.2.0/graph/badge.svg?token=O4SF1X4AM5)](https://codecov.io/gh/redpeacock78/gyokuto) [![Release](https://github.com/redpeacock78/gyokuto/actions/workflows/release.yml/badge.svg)](https://github.com/redpeacock78/gyokuto/actions/workflows/release.yml)

</div>

## About Gyokuto
Gyokuto is simplifies array manipulation in Javascript.  
The meaning of "Gyokuto" is "玉兔", an imaginary moon rabbit found in Chinese and Japanese folklore that says "there is a rabbit in the moon".  

## Usage
### Install
```bash
$ yarn add 'https://github.com/redpeacock78/gyokuto.git#master'
```
### Example
```javascript
import * as gyokuto from 'gyokuto';

const calc = gyokuto.calc();

const array_1 = [1, 2, 3];
const array_2 = [3, 4, 5];

(() => {
  // Union
  const union = calc.union(array_1);
  console.log(union(array_2)); // => [1, 2, 3, 4, 5]
  // Diff
  const diff = calc.diff(array_1, array_2);
  console.log(diff); // => [1, 2]
})();
```

## API
### `calc()`
Performs set operations on two one-dimensional arrays (**It is curried**).
- `union()`  
  Returns the union of the two input one-dimensional arrays.
  - Types
    ```typescript
    <U>(...args_1: U[]):
      | (<T>(array_a: T[], array_b?: T[]) => T[])
      | ((...args_2: U[]) => <T>(array_a: T[], array_b?: T[]) => T[]);
    ```
  - Example
    ```javascript
    const a = [1, 2, 3];
    const b = [3, 4, 5];
    const union = gyokuto.calc().union(a)(b);
    console.log(union); // => [1, 2, 3, 4, 5]
    ```
- `diff()`  
  Returns the difference set of the two input one-dimensional arrays.
  - Types
    ```typescript
    <U>(...args_1: U[]):
      | (<T>(array_a: T[], array_b?: T[]) => T[])
      | ((...args_2: U[]) => <T>(array_a: T[], array_b?: T[]) => T[]);
    ```
  - Example
    ```javascript
    const a = [1, 2, 3];
    const b = [3, 4, 5];
    const diff = gyokuto.calc().diff(a)(b);
    console.log(diff); // => [1, 2]
    ```
- `symDiff()`  
  Returns the symmetric difference set of the two input one-dimensional arrays.
  - Types
    ```typescript
    <U>(...args_1: U[]):
      | (<T>(array_a: T[], array_b?: T[]) => T[])
      | ((...args_2: U[]) => <T>(array_a: T[], array_b?: T[]) => T[]);
    ```
  - Example
    ```javascript
    const a = [1, 2, 3];
    const b = [3, 4, 5];
    const sym_diff = gyokuto.calc().symDiff(a)(b);
    console.log(sym_diff); // => [1, 2, 4, 5]
    ```
- `intersect()`  
  Returns the product set of the two input one-dimensional arrays.
  - Types
    ```typescript
    <U>(...args_1: U[]):
      | (<T>(array_a: T[], array_b?: T[]) => T[])
      | ((...args_2: U[]) => <T>(array_a: T[], array_b?: T[]) => T[]);
    ```
  - Example
    ```javascript
    const a = [1, 2, 3];
    const b = [3, 4, 5];
    const intersect = gyokuto.calc().intersect(a)(b);
    console.log(intersect); // => [3]
    ```
- `product()`  
  Returns the direct product set of the two input one-dimensional arrays.
  - Types
    ```typescript
    <U>(...args_1: U[]):
      | (<T>(array_a: T[], array_b?: T[]) => T[][])
      | ((...args_2: U[]) => <T>(array_a: T[], array_b?: T[]) => T[][]);
    ```
  - Example
    ```javascript
    const a = [1, 2, 3];
    const b = [3, 4, 5];
    const product = gyokuto.calc().product(a)(b);
    console.log(product); 
    // => [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5], [3, 3], [3, 4], [3, 5]]
    ```
- `superSet()`  
  Determines if the two input arrays are supersets of each other.
  - Types
    ```typescript
    <U>(...args_1: U[]):
      | (<T>(array_a: T[], array_b?: T[]) => boolean)
      | ((...args_2: U[]) => <T>(array_a: T[], array_b?: T[]) => boolean);
    ```
  - Example
    ```javascript
    const x = [1, 2, 3, 4];
    const y = [2, 3];
    const superSet_a = calc.superSet(x)(y);
    const superSet_b = calc.superSet(y)(x);
    console.log(superSet_a); // => true
    console.log(superSet_b); // => false
    ```
- `subSet()`  
  Determines if the two input arrays are subsets of each other.
  - Types
    ```typescript
    <U>(...args_1: U[]):
      | (<T>(array_a: T[], array_b?: T[]) => boolean)
      | ((...args_2: U[]) => <T>(array_a: T[], array_b?: T[]) => boolean);
    ```
  - Example
    ```javascript
    const x = [1, 2, 3, 4];
    const y = [2, 3];
    const subSet_a = calc.subSet(x)(y);
    const subSet_b = calc.subSet(y)(x);
    console.log(subSet_a); // => false
    console.log(subSet_b); // => true
    ```
### `tools()`
Performs operations on one-dimensional arrays.
- `grep()`  
  Returns the elements that match the specified regular expression in a one-dimensional array.
  - Types
    ```typescript
    <T>(array: T[], regexp: RegExp): T[]
    ```
  - Example
    ```javascript
    const array = 'Cannot read property'.split(' ');
    const regexp = /^[A-Z]/g;
    const grep = gyokuto.tools().grep(array, regexp);
    console.log(grep); // => ['Cannot']
    ```
- `dedup()`  
  Removes duplicate elements of a one-dimensional array.
  - Types
    ```typescript
    <T>(array: T[]): T[]
    ```
  - Example
    ```javascript
    const array = [1, 2, 2, 3, 3, 3];
    const dedup = gyokuto.tools().dedup(array);
    console.log(dedup); // => [1, 2, 3]
    ```
- `shuffle()`  
  Shuffles the elements of a one-dimensional array.
  - Types
    ```typescript
    <T>(array: T[]): T[]
    ```
  - Example
    ```javascript
    const array = [1, 2, 2, 3, 3, 3];
    const shuffle = gyokuto.tools().shuffle(array);
    console.log(shuffle); // => [3, 3, 1, 2, 3, 2]
    ```
- `accumulate()`  
  Returns the cumulative sum of the elements of a one-dimensional array.
  - Types
    ```typescript
    <T>(array: T | T[]): any[]
    ```
  - Example
    ```javascript
    const array = [1, 2, 2, 3, 3, 3];
    const accumulate = gyokuto.tools().accumulate(array);
    console.log(accumulate); // => [1, 3, 5, 8, 11, 14]
    ```
- `permutations()`  
  Returns the permutation for the elements of a one-dimensional array.
  - Types
    ```typescript
    <T>(array: T[], num?: number) => T[][]
    ```
  - Example
    ```javascript
    const array = [...Array(3).keys()];
    const permutations = gyokuto.tools().permutations(array);
    console.log(permutations);
    // => [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]]
    const permutations_2 = gyokuto.tools().permutations(array, 2);
    console.log(permutations_2);
    // => [[0, 1], [0, 2], [1, 0], [1, 2], [2, 0],[2, 1]]
    ```

Lisence
---
This source code is licensed [MIT](https://github.com/redpeacock78/gyokuto/blob/master/LICENSE).