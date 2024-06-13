import { describe, it } from 'node:test';
import assert from 'assert';
import { take } from 'lodash-es';

describe('take', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof take, 'function');
    });
});