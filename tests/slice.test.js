import { describe, it } from 'node:test';
import assert from 'assert';
import { slice } from 'lodash-es';

describe('slice', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof slice, 'function');
    });
});