import { describe, it } from 'node:test';
import assert from 'assert';
import mean from 'lodash-es-with-subpaths/mean';

describe('mean', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof mean, 'function');
    });
});