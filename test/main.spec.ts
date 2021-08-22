import * as gyokuto from '../src/main';

describe('Calculation Functions Test', (): void => {
  const calc = gyokuto.calc();
  const a: number[] = [1, 2, 3];
  const b: number[] = [3, 4, 5];
  const pro: number[][] = [
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 4],
    [2, 5],
    [3, 3],
    [3, 4],
    [3, 5],
  ];
  test('Union Function Test', (): void => {
    const union: number[] = calc.union(a)(b) as [];
    expect(union).toStrictEqual([1, 2, 3, 4, 5]);
  });
  test('Diff Function Test', (): void => {
    const diff_a: number[] = calc.diff(a)(b) as [];
    const diff_b: number[] = calc.diff(b)(a) as [];
    expect(diff_a).toStrictEqual([1, 2]);
    expect(diff_b).toStrictEqual([4, 5]);
  });
  test('Intersection Function Test', (): void => {
    const intersect: number[] = calc.intersect(a)(b) as [];
    expect(intersect).toStrictEqual([3]);
  });
  test('Symmetric Diff Function Test', (): void => {
    const sym_diff: number[] = calc.symDiff(a)(b) as [];
    expect(sym_diff).toStrictEqual([1, 2, 4, 5]);
  });
  test('Direct Product Function Test', (): void => {
    const product: number[] = calc.product(a)(b) as [];
    expect(product).toStrictEqual(pro);
  });
  test('Super Set Function Test', (): void => {
    const x: number[] = [1, 2, 3, 4];
    const y: number[] = [2, 3];
    const superSet_a: boolean = calc.superSet(x)(y) as boolean;
    const superSet_b: boolean = calc.superSet(y)(x) as boolean;
    expect(superSet_a).toBe(true);
    expect(superSet_b).toBe(false);
  });
  test('Sub Set Function Test', (): void => {
    const x: number[] = [1, 2, 3, 4];
    const y: number[] = [2, 3];
    const superSet_a: boolean = calc.subSet(y)(x) as boolean;
    const superSet_b: boolean = calc.subSet(x)(y) as boolean;
    expect(superSet_a).toBe(true);
    expect(superSet_b).toBe(false);
  });
});

describe('Tools Functions Test', (): void => {
  const tools = gyokuto.tools();
  const a: number[] = [1, 2, 2, 3, 3, 3];
  test('Deduplicate Function Test', (): void => {
    const dedup: number[] = tools.dedup(a);
    expect(dedup).toStrictEqual([1, 2, 3]);
  });
  test('Depth Function Test', (): void => {
    const depth: number[] = tools.depth([0, [1], [[2]], [3], [[[5]]], 6]);
    expect(depth).toStrictEqual([1, 2, 3, 2, 4, 1]);
  });
  test('Shuffle Function Test', (): void => {
    const shuffle: number[] = tools.shuffle(a);
    expect(Array.isArray(shuffle)).toBe(true);
  });
  test('Accumulate Function Test', (): void => {
    const accumulate: number[] = tools.accumulate(a);
    expect(accumulate).toStrictEqual([1, 3, 5, 8, 11, 14]);
  });
  test('Permutations Function Test', (): void => {
    const permutations_1: number[] = tools.permutations([...Array(3).keys()]);
    const permutations_2: number[] = tools.permutations(
      [...Array(3).keys()],
      2
    );
    expect(permutations_1).toStrictEqual([
      [0, 1, 2],
      [0, 2, 1],
      [1, 0, 2],
      [1, 2, 0],
      [2, 0, 1],
      [2, 1, 0],
    ]);
    expect(permutations_2).toStrictEqual([
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 2],
      [2, 0],
      [2, 1],
    ]);
  });
  test('Grep Function Test', (): void => {
    const grep_1: string[] = tools.grep(
      'Cannot read property'.split(' '),
      /^[A-Z]/g
    );
    const grep_2: number[] = tools.grep([11, 23, 65, 82, 292, 325], /2/g);
    expect(grep_1).toStrictEqual(['Cannot']);
    expect(grep_2).toStrictEqual([23, 82, 292, 325]);
  });
});
