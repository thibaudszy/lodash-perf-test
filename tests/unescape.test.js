import { describe, it } from 'node:test';
import assert from 'assert';
import { unescape } from 'lodash-es';

describe('unescape', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof unescape, 'function');
    });
});