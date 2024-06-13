import { describe, it } from 'node:test';
import assert from 'assert';
import { flattenDeep } from 'lodash-es';

describe('flattenDeep', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof flattenDeep, function);
    });
});