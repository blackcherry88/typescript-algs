import { it, expect } from 'vitest';
import { bubbleSort } from '../../src/sort.js';

// Assert bubbleSort is correct
it('test buble sort', () => {
    const x = bubbleSort([64, 34, 25, 12, 22, 11, 90]);
    expect(x[0]).toBe(11);
    expect(x[x.length-1]).toBe(90);
    console.log(x)
});