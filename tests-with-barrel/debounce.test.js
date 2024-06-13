import { describe, it } from 'node:test';
import assert from 'assert';
import { debounce } from 'lodash-es';

describe('debounce', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof debounce, function);
    });
});