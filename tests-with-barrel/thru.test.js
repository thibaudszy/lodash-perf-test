import { describe, it } from 'node:test';
import assert from 'assert';
import { thru } from 'lodash-es';

describe('thru', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof thru, function);
    });
});