import { describe, it } from 'node:test';
import assert from 'assert';
import { lowerFirst } from 'lodash-es';

describe('lowerFirst', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof lowerFirst, 'function');
    });
});