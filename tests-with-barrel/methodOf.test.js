import { describe, it } from 'node:test';
import assert from 'assert';
import { methodOf } from 'lodash-es';

describe('methodOf', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof methodOf, function);
    });
});