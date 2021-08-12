![logo](https://github.com/redpeacock78/gyokuto/blob/master/docs/logo.svg)
---
Gyokuto is simplifies array manipulation in Javascript.  

About Gyokuto
---
Gyokuto is simplifies array manipulation in Javascript. The meaning of "Gyokuto" is "玉兔", an imaginary moon rabbit found in Chinese and Japanese folklore that says "there is a rabbit in the moon".  

Usage
---
## Install
```bash
$ yarn add 'https://github.com/redpeacock78/gyokuto.git#master'
```
## Example
```javascript
import * as gyokuto from 'gyokuto';

const calc = gyaokuto.calc();

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

API
---
## Modules
### `calc()`
Performs set operations on two one-dimensional arrays (**It is curried**).
- `union()`: Returns the union of the two input one-dimensional arrays.
  ```javascript
  const a = [1, 2, 3];
  const b = [3, 4, 5];
  const union = gyokuto.calc().union(a)(b);
  console.log(union); // => [1, 2, 3, 4, 5]
  ```
- `diff()`: Returns the difference set of the two input one-dimensional arrays.
  ```javascript
  const a = [1, 2, 3];
  const b = [3, 4, 5];
  const diff = gyokuto.calc().diff(a)(b);
  console.log(diff); // => [1, 2]
  ```
- `symDiff()`: Returns the symmetric difference set of the two input one-dimensional arrays.
  ```javascript
  const a = [1, 2, 3];
  const b = [3, 4, 5];
  const sym_diff = gyokuto.calc().symDiff(a)(b);
  console.log(sym_diff); // => [1, 2, 4, 5]
  ```
- `intersect()`: Returns the product set of the two input one-dimensional arrays.
  ```javascript
  const a = [1, 2, 3];
  const b = [3, 4, 5];
  const intersect = gyokuto.calc().intersect(a)(b);
  console.log(intersect); // => [3]
  ```
- `product()`: Returns the direct product set of the two input one-dimensional arrays.
  ```javascript
  const a = [1, 2, 3];
  const b = [3, 4, 5];
  const product = gyokuto.calc().product(a)(b);
  console.log(product); 
  // => [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5], [3, 3], [3, 4], [3, 5]]
  ```
### `tools()`
Performs operations on one-dimensional arrays.
- `dedup()`: Removes duplicate elements of a one-dimensional array.
  ```javascript
  const array = [1, 2, 2, 3, 3, 3];
  const dedup = gyokuto.tools().dedup(array);
  console.log(dedup); // => [1, 2, 3]
  ```
- `shuffle()`: Shuffles the elements of a one-dimensional array.
  ```javascript
  const array = [1, 2, 2, 3, 3, 3];
  const shuffle = gyokuto.tools().shuffle(array);
  console.log(shuffle); // => [3, 3, 1, 2, 3, 2]
  ```
- `accumulate()`: Returns the cumulative sum of the elements of a one-dimensional array.
  ```javascript
  const array = [1, 2, 2, 3, 3, 3];
  const accumulate = gyokuto.tools().accumulate(array);
  console.log(accumulate); // => [1, 3, 5, 8, 11, 14]
  ```
- `permutations()`: Returns the permutation for the elements of a one-dimensional array.
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
This source code is licensed [MIT](https://github.com/redpeacock78/gyokuto/blob/master/LICENCE).