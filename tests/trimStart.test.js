import { describe, it } from 'node:test';
import assert from 'assert';
import { trimStart } from 'lodash-es';

describe('trimStart', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof trimStart, 'function');
    });
});