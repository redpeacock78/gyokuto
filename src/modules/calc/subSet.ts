//部分集合
import { _subSet } from '../../../@types/main';
import * as dedup from '#tools/dedup';
import * as curry from '#libs/curry';

const subSet: _subSet = curry(<T>(array_a: T[], array_b?: T[]): boolean => {
  const result: boolean[] = dedup<boolean>(
    [...new Set(array_a)].map((elem: T): boolean => {
      return new Set(array_b).has(elem) ? true : false;
    })
  );
  return result.length === 1 ? true : false;
});

export = subSet;
