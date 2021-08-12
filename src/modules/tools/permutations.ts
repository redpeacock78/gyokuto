//順列
import { _permutations } from '../../../@types/main';

const permutations: _permutations = <T>(array: T[], num?: number): T[] => {
  const result: unknown[] = [];
  const core = (post: T[], n?: number, pre?: T[]): T[] => {
    const pre_1: T[] = !pre ? [] : pre;
    const num: number = n === undefined ? post.length : n;
    if (num > 0) {
      post.map((i: string | T, index: number): void => {
        const rest: T[] = [...post];
        const elem: T[] = rest.splice(index, 1);
        core(rest, num - 1, [...pre_1, ...elem]);
      });
    } else {
      result.push([...pre_1]) as unknown as (string | T)[];
    }
    return result as T[];
  };
  return core(array, num);
};

export = permutations;
