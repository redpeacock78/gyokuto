//上位集合
import { _superSet } from '../../../@types/main';
import * as dedup from '#tools/dedup';
import * as curry from '#libs/curry';

const superSet: _superSet = curry(<T>(array_a: T[], array_b?: T[]): boolean => {
  const result: boolean[] = dedup<boolean>(
    [...new Set(array_b)].map((elem: T): boolean => {
      return new Set(array_a).has(elem) ? true : false;
    })
  );
  return result.length === 1 ? true : false;
});

export = superSet;
