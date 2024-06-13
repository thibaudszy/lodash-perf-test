import { describe, it } from 'node:test';
import assert from 'assert';
import { over } from 'lodash-es';

describe('over', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof over, 'function');
    });
});