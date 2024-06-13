import { describe, it } from 'node:test';
import assert from 'assert';
import { isDate } from 'lodash-es';

describe('isDate', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isDate, 'function');
    });
});