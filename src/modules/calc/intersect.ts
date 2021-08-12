//積集合
import { _intersect } from '../../../@types/main';
import * as curry from '#libs/curry';

const intersect: _intersect = curry(<T>(array_a: T[], array_b?: T[]): T[] => {
  const x: Set<T> = new Set(array_a);
  const y: Set<T> = new Set(array_b);
  return [...x].filter((elem: T): boolean => y.has(elem));
});

export = intersect;
