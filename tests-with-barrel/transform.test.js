import { describe, it } from 'node:test';
import assert from 'assert';
import { transform } from 'lodash-es';

describe('transform', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof transform, 'function');
    });
});