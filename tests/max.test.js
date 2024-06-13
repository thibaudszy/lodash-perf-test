import { describe, it } from 'node:test';
import assert from 'assert';
import { max } from 'lodash-es';

describe('max', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof max, 'function');
    });
});