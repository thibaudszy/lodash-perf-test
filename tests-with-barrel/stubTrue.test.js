import { describe, it } from 'node:test';
import assert from 'assert';
import { stubTrue } from 'lodash-es';

describe('stubTrue', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof stubTrue, function);
    });
});