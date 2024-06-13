import { describe, it } from 'node:test';
import assert from 'assert';
import range from 'lodash-es-with-subpaths/range';

describe('range', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof range, 'function');
    });
});