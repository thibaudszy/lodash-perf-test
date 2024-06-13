import { describe, it } from 'node:test';
import assert from 'assert';
import { reject } from 'lodash-es';

describe('reject', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof reject, function);
    });
});