import { describe, it } from 'node:test';
import assert from 'assert';
import { xorBy } from 'lodash-es';

describe('xorBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof xorBy, function);
    });
});