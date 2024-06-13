import { describe, it } from 'node:test';
import assert from 'assert';
import { isRegExp } from 'lodash-es';

describe('isRegExp', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isRegExp, 'function');
    });
});