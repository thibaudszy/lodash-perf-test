import { describe, it } from 'node:test';
import assert from 'assert';
import mixin from 'lodash-es-with-subpaths/mixin';

describe('mixin', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof mixin, 'function');
    });
});