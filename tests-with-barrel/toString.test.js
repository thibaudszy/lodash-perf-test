import { describe, it } from 'node:test';
import assert from 'assert';
import { toString } from 'lodash-es';

describe('toString', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof toString, 'function');
    });
});