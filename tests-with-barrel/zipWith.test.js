import { describe, it } from 'node:test';
import assert from 'assert';
import { zipWith } from 'lodash-es';

describe('zipWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof zipWith, function);
    });
});