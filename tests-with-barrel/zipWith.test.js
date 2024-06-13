import { describe, it } from 'node:test';
import assert from 'assert';
import { zipWith } from 'lodash-es';

describe('zipWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof zipWith, 'function');
    });
});