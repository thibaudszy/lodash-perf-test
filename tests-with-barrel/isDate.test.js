import { describe, it } from 'node:test';
import assert from 'assert';
import { isDate } from 'lodash-es';

describe('isDate', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isDate, 'function');
    });
});