import { describe, it } from 'node:test';
import assert from 'assert';
import { toArray } from 'lodash-es';

describe('toArray', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof toArray, function);
    });
});