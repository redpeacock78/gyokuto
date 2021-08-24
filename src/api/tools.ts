import { _tools } from '../../@types/main';
import * as grep from '#tools/grep';
import * as dedup from '#tools/dedup';
import * as depth from '#tools/depth';
import * as shuffle from '#tools/shuffle';
import * as accumulate from '#tools/accumulate';
import * as permutations from '#tools/permutations';

const tools: _tools = () => {
  return {
    grep: grep,
    dedup: dedup,
    depth: depth,
    shuffle: shuffle,
    accumulate: accumulate,
    permutations: permutations,
  };
};

export = tools;
