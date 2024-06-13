import { describe, it } from 'node:test';
import assert from 'assert';
import { isBuffer } from 'lodash-es';

describe('isBuffer', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isBuffer, 'function');
    });
});