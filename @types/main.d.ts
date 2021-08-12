export interface _union {
  <U>(...args_1: U[]):
    | (<T>(array_a: T[], array_b?: T[]) => T[])
    | ((...args_2: U[]) => <T>(array_a: T[], array_b?: T[]) => T[]);
}
export interface _diff {
  <U>(...args_1: U[]):
    | (<T>(array_a: T[], array_b?: T[]) => T[])
    | ((...args_2: U[]) => <T>(array_a: T[], array_b?: T[]) => T[]);
}
export interface _intersect {
  <U>(...args_1: U[]):
    | (<T>(array_a: T[], array_b?: T[]) => T[])
    | ((...args_2: U[]) => <T>(array_a: T[], array_b?: T[]) => T[]);
}
export interface _symDiff {
  <U>(...args_1: U[]):
    | (<T>(array_a: T[], array_b?: T[]) => T[])
    | ((...args_2: U[]) => <T>(array_a: T[], array_b?: T[]) => T[]);
}
export interface _product {
  <U>(...args_1: U[]):
    | (<T>(array_a: T[], array_b?: T[]) => T[][])
    | ((...args_2: U[]) => <T>(array_a: T[], array_b?: T[]) => T[][]);
}

export interface _calc {
  (): {
    union: _union;
    diff: _diff;
    intersect: _intersect;
    symDiff: _symDiff;
    product: _product;
  };
}

export interface _dedup {
  <T>(array: T[]): T[];
}
export interface _shuffle {
  <T>(array: T[]): T[];
}
export interface _grep {
  <T>(array: T[], regexp: RegExp): T[];
}
export interface _accumulate {
  <T>(array: T | T[]): any[];
}
export interface _permutations {
  <T>(array: T[], num?: number): T[];
}
export interface _tools {
  (): {
    grep: _grep;
    dedup: _dedup;
    shuffle: _shuffle;
    accumulate: _accumulate;
    permutations: _permutations;
  };
}

export interface _gyokuto {
  calc: _calc;
  tools: _tools;
}
