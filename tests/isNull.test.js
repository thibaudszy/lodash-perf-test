import { describe, it } from 'node:test';
import assert from 'assert';
import { isNull } from 'lodash-es';

describe('isNull', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isNull, 'function');
    });
});