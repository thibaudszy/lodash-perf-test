import { describe, it } from 'node:test';
import assert from 'assert';
import stubTrue from 'lodash-es-with-subpaths/stubTrue';

describe('stubTrue', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof stubTrue, function);
    });
});