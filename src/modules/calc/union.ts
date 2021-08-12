//和集合
import { _union } from '../../../@types/main';
import * as dedup from '#tools/dedup';
import * as curry from '#libs/curry';

const union: _union = curry(<T>(array_a: T[], array_b?: T[]): T[] =>
  dedup<T>([...array_a, ...array_b])
);

export = union;
