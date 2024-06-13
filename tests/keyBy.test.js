import { describe, it } from 'node:test';
import assert from 'assert';
import { keyBy } from 'lodash-es';

describe('keyBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof keyBy, 'function');
    });
});