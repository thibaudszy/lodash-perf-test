import { describe, it } from 'node:test';
import assert from 'assert';
import { words } from 'lodash-es';

describe('words', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof words, 'function');
    });
});