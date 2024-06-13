import { describe, it } from 'node:test';
import assert from 'assert';
import conformsTo from 'lodash-es-with-subpaths/conformsTo';

describe('conformsTo', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof conformsTo, 'function');
    });
});