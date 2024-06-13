import { describe, it } from 'node:test';
import assert from 'assert';
import flattenDeep from 'lodash-es-with-subpaths/flattenDeep';

describe('flattenDeep', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof flattenDeep, 'function');
    });
});