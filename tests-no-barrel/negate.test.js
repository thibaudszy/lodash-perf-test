import { describe, it } from 'node:test';
import assert from 'assert';
import negate from 'lodash-es-with-subpaths/negate';

describe('negate', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof negate, 'function');
    });
});