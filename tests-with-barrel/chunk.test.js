import { describe, it } from 'node:test';
import assert from 'assert';
import { chunk } from 'lodash-es';

describe('chunk', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof chunk, function);
    });
});