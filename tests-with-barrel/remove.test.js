import { describe, it } from 'node:test';
import assert from 'assert';
import { remove } from 'lodash-es';

describe('remove', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof remove, 'function');
    });
});