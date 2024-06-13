import { describe, it } from 'node:test';
import assert from 'assert';
import { isWeakSet } from 'lodash-es';

describe('isWeakSet', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isWeakSet, 'function');
    });
});