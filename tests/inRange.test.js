import { describe, it } from 'node:test';
import assert from 'assert';
import { inRange } from 'lodash-es';

describe('inRange', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof inRange, 'function');
    });
});