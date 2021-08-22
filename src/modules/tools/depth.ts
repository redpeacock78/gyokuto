//配列の深さ
import { _depth } from '../../../@types/main';

const depth: _depth = <T>(array: T[]): number[] => {
  let num: number = 1;
  const result: number[] = [];
  const core: (arr: T[]) => void = (arr: T[]): void => {
    for (let i: number = 0; i < arr.length; i++) {
      if (!Array.isArray(arr[i])) {
        result.push(num);
        num = 1;
      } else {
        num += 1;
        core(arr[i] as unknown as []);
      }
    }
  };
  core(array);
  return result;
};

export = depth;
