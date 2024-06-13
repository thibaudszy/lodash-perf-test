import { describe, it } from 'node:test';
import assert from 'assert';
import { ary } from 'lodash-es';

describe('ary', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof ary, function);
    });
});