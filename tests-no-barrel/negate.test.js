import { describe, it } from 'node:test';
import assert from 'assert';
import negate from 'lodash-es-with-subpaths/negate';

describe('negate', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof negate, function);
    });
});