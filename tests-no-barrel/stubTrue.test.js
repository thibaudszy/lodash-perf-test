import { describe, it } from 'node:test';
import assert from 'assert';
import stubTrue from 'lodash-es-with-subpaths/stubTrue';

describe('stubTrue', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof stubTrue, 'function');
    });
});