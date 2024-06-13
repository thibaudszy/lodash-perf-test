import { describe, it } from 'node:test';
import assert from 'assert';
import zipObject from 'lodash-es-with-subpaths/zipObject';

describe('zipObject', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof zipObject, function);
    });
});