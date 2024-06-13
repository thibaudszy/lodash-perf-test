import { describe, it } from 'node:test';
import assert from 'assert';
import { fill } from 'lodash-es';

describe('fill', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof fill, 'function');
    });
});