import { describe, it } from 'node:test';
import assert from 'assert';
import { partialRight } from 'lodash-es';

describe('partialRight', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof partialRight, 'function');
    });
});