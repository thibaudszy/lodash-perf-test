import { describe, it } from 'node:test';
import assert from 'assert';
import { toSafeInteger } from 'lodash-es';

describe('toSafeInteger', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof toSafeInteger, 'function');
    });
});