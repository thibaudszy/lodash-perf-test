import { describe, it } from 'node:test';
import assert from 'assert';
import clone from 'lodash-es-with-subpaths/clone';

describe('clone', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof clone, function);
    });
});