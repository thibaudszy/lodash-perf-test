import { describe, it } from 'node:test';
import assert from 'assert';
import { defaults } from 'lodash-es';

describe('defaults', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof defaults, function);
    });
});