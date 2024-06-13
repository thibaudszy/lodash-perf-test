import { describe, it } from 'node:test';
import assert from 'assert';
import split from 'lodash-es-with-subpaths/split';

describe('split', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof split, 'function');
    });
});