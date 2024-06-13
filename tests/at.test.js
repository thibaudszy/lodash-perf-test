import { describe, it } from 'node:test';
import assert from 'assert';
import { at } from 'lodash-es';

describe('at', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof at, 'function');
    });
});