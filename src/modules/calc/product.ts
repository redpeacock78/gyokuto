//直積集合
import { _product } from '#types/main';
import * as dedup from '#tools/dedup';
import * as curry from '#libs/curry';

const product: _product = curry(<T>(array_a: T[], array_b?: T[]): T[][] => {
  return dedup<T>(array_a)
    .map((elem_a: T): T[][] => {
      return dedup<T>(array_b).map((elem_b: T): T[] => {
        return [elem_a, elem_b];
      });
    })
    .flat()
    .filter(Boolean);
});

export = product;
