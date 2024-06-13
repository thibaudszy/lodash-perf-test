import { describe, it } from 'node:test';
import assert from 'assert';
import { flip } from 'lodash-es';

describe('flip', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof flip, 'function');
    });
});