//シャッフル
import { _shuffle } from '../../../@types/main';

const shuffle: _shuffle = <T>(array: T[]): T[] => {
  const result: T[] = [...array];
  let i: number = result.length;
  for (i; 1 < i; i--) {
    const j: number = Math.floor(Math.random() * i);
    [result[j], result[i - 1]] = [result[i - 1], result[j]];
  }
  return result;
};

export = shuffle;
