import { describe, it } from 'node:test';
import assert from 'assert';
import reduce from 'lodash-es-with-subpaths/reduce';

describe('reduce', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof reduce, 'function');
    });
});