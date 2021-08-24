import { _calc } from '../../@types/main';
import * as union from '#calc/union';
import * as diff from '#calc/diff';
import * as intersect from '#calc/intersect';
import * as symDiff from '#calc/symDiff';
import * as product from '#calc/product';
import * as superSet from '#calc/superSet';
import * as subSet from '#calc/subSet';

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

export = calc;
