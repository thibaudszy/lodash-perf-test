import { describe, it } from 'node:test';
import assert from 'assert';
import { isWeakMap } from 'lodash-es';

describe('isWeakMap', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isWeakMap, function);
    });
});