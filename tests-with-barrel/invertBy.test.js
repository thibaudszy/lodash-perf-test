import { describe, it } from 'node:test';
import assert from 'assert';
import { invertBy } from 'lodash-es';

describe('invertBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof invertBy, function);
    });
});