import { describe, it } from 'node:test';
import assert from 'assert';
import difference from 'lodash-es-with-subpaths/difference';

describe('difference', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof difference, 'function');
    });
});