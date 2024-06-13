import { describe, it } from 'node:test';
import assert from 'assert';
import { result } from 'lodash-es';

describe('result', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof result, 'function');
    });
});