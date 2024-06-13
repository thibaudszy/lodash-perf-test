import { describe, it } from 'node:test';
import assert from 'assert';
import sum from 'lodash-es-with-subpaths/sum';

describe('sum', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof sum, 'function');
    });
});