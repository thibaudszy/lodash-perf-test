import { describe, it } from 'node:test';
import assert from 'assert';
import { lowerFirst } from 'lodash-es';

describe('lowerFirst', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof lowerFirst, 'function');
    });
});