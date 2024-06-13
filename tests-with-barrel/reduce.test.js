import { describe, it } from 'node:test';
import assert from 'assert';
import { reduce } from 'lodash-es';

describe('reduce', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof reduce, 'function');
    });
});