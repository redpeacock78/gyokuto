//対称差集合
import { _symDiff } from '../../../@types/main';
import * as Union from '#calc/union';
import * as Intersect from '#calc/intersect';
import * as curry from '#libs/curry';

const symDiff: _symDiff = curry(<T>(array_a: T[], array_b?: T[]): T[] => {
  const union: T[] = Union<T[]>(array_a)(array_b) as [];
  const intersect: T[] = Intersect<T[]>(array_a)(array_b) as [];
  return union.filter((elem: T): boolean => !new Set(intersect).has(elem));
});

export = symDiff;
