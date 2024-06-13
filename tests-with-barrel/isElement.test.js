import { describe, it } from 'node:test';
import assert from 'assert';
import { isElement } from 'lodash-es';

describe('isElement', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isElement, 'function');
    });
});