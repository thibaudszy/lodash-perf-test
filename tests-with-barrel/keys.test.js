import { describe, it } from 'node:test';
import assert from 'assert';
import { keys } from 'lodash-es';

describe('keys', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof keys, function);
    });
});