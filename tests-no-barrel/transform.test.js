import { describe, it } from 'node:test';
import assert from 'assert';
import transform from 'lodash-es-with-subpaths/transform';

describe('transform', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof transform, function);
    });
});