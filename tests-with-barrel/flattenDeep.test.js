import { describe, it } from 'node:test';
import assert from 'assert';
import { flattenDeep } from 'lodash-es';

describe('flattenDeep', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof flattenDeep, 'function');
    });
});