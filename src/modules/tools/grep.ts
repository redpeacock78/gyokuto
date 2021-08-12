//検索
import { _grep } from '../../../@types/main';

const grep: _grep = <T>(array: T[], regexp: RegExp): T[] => {
  return array
    .map((i: T, index: number): T => {
      const match: RegExpMatchArray = i.toString().match(regexp);
      if (match !== null) {
        return array[index];
      }
    })
    .filter(Boolean);
};

export = grep;
