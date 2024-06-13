import { describe, it } from 'node:test';
import assert from 'assert';
import { isEqual } from 'lodash-es';

describe('isEqual', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isEqual, function);
    });
});