//累積和
import { _accumulate } from '#types/main';

const accumulate: _accumulate = <T>(array: T[]): any[] => {
  const result: any[] = [];
  array.map((i: T, index: number): void => {
    if (index === 0) {
      result.push(i);
    } else {
      const x: any = i + result[index - 1];
      if (typeof x !== 'string') {
        result.push(x);
      } else {
        result.push([...(x as string)].sort().join(''));
      }
    }
  });
  return result;
};

export = accumulate;
