import { describe, it } from 'node:test';
import assert from 'assert';
import { mean } from 'lodash-es';

describe('mean', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof mean, function);
    });
});