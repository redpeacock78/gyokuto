import { _calc, _tools, _gyokuto } from '../@types/main';
import * as union from '#calc/union';
import * as diff from '#calc/diff';
import * as intersect from '#calc/intersect';
import * as symDiff from '#calc/symDiff';
import * as product from '#calc/product';
import * as superSet from '#calc/superSet';
import * as subSet from '#calc/subSet';
import * as grep from '#tools/grep';
import * as dedup from '#tools/dedup';
import * as depth from '#tools/depth';
import * as shuffle from '#tools/shuffle';
import * as accumulate from '#tools/accumulate';
import * as permutations from '#tools/permutations';

const calc: _calc = () => {
  return {
    union: union,
    diff: diff,
    intersect: intersect,
    symDiff: symDiff,
    product: product,
    superSet: superSet,
    subSet: subSet,
  };
};

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

const gyokuto: _gyokuto = {
  calc: calc,
  tools: tools,
};

export = gyokuto;
