//重複削除
import { _dedup } from '../../../@types/main';

const dedup: _dedup = <T>(array: T[]): T[] => {
  return [...new Set(array)];
};

export = dedup;
