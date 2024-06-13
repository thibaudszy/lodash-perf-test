import { describe, it } from 'node:test';
import assert from 'assert';
import { every } from 'lodash-es';

describe('every', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof every, function);
    });
});