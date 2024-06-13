import { describe, it } from 'node:test';
import assert from 'assert';
import { tail } from 'lodash-es';

describe('tail', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof tail, 'function');
    });
});