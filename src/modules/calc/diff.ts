//差集合
import { _diff } from '#types/main';
import * as curry from '#libs/curry';

const diff: _diff = curry(<T>(array_a: T[], array_b?: T[]): T[] => {
  const x: Set<T> = new Set(array_a);
  const y: Set<T> = new Set(array_b);
  return [...x].filter((elem: T): boolean => !y.has(elem));
});

export = diff;
