import { describe, it } from 'node:test';
import assert from 'assert';
import stubArray from 'lodash-es-with-subpaths/stubArray';

describe('stubArray', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof stubArray, 'function');
    });
});