import { describe, it } from 'node:test';
import assert from 'assert';
import { isElement } from 'lodash-es';

describe('isElement', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isElement, 'function');
    });
});