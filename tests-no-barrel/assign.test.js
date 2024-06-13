import { describe, it } from 'node:test';
import assert from 'assert';
import assign from 'lodash-es-with-subpaths/assign';

describe('assign', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof assign, 'function');
    });
});