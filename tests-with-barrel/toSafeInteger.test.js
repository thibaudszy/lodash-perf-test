import { describe, it } from 'node:test';
import assert from 'assert';
import { toSafeInteger } from 'lodash-es';

describe('toSafeInteger', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof toSafeInteger, 'function');
    });
});