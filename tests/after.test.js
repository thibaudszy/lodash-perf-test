import { describe, it } from 'node:test';
import assert from 'assert';
import { after } from 'lodash-es';

describe('after', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof after, 'function');
    });
});