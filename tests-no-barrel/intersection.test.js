import { describe, it } from 'node:test';
import assert from 'assert';
import intersection from 'lodash-es-with-subpaths/intersection';

describe('intersection', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof intersection, 'function');
    });
});