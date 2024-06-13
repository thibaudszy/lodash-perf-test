import { describe, it } from 'node:test';
import assert from 'assert';
import { lte } from 'lodash-es';

describe('lte', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof lte, 'function');
    });
});