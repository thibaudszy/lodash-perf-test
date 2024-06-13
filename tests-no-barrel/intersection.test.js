import { describe, it } from 'node:test';
import assert from 'assert';
import intersection from 'lodash-es-with-subpaths/intersection';

describe('intersection', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof intersection, function);
    });
});