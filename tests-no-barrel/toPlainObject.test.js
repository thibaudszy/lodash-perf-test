import { describe, it } from 'node:test';
import assert from 'assert';
import toPlainObject from 'lodash-es-with-subpaths/toPlainObject';

describe('toPlainObject', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof toPlainObject, 'function');
    });
});