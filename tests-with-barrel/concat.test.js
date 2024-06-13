import { describe, it } from 'node:test';
import assert from 'assert';
import { concat } from 'lodash-es';

describe('concat', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof concat, function);
    });
});