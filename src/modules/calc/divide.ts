//商集合
import { _divide } from '../../../@types/main';

const divide: _divide = <T>(array: T[][]): T[][] => {
  const x: T[] = [];
  const y: T[] = [];
  array.map((i: T[]): void => {
    x.push(i[0]);
    y.push(i[1]);
  });
  return [[...new Set(x)], [...new Set(y)]];
};

export = divide;
