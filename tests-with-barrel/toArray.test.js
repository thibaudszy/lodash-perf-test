import { describe, it } from 'node:test';
import assert from 'assert';
import { toArray } from 'lodash-es';

describe('toArray', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof toArray, 'function');
    });
});