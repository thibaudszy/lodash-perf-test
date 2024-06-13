import { describe, it } from 'node:test';
import assert from 'assert';
import { isNil } from 'lodash-es';

describe('isNil', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isNil, 'function');
    });
});