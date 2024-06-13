import { describe, it } from 'node:test';
import assert from 'assert';
import max from 'lodash-es-with-subpaths/max';

describe('max', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof max, 'function');
    });
});