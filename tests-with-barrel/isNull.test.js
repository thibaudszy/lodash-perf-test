import { describe, it } from 'node:test';
import assert from 'assert';
import { isNull } from 'lodash-es';

describe('isNull', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isNull, 'function');
    });
});