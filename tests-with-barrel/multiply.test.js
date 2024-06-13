import { describe, it } from 'node:test';
import assert from 'assert';
import { multiply } from 'lodash-es';

describe('multiply', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof multiply, 'function');
    });
});