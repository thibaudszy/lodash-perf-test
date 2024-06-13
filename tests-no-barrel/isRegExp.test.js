import { describe, it } from 'node:test';
import assert from 'assert';
import isRegExp from 'lodash-es-with-subpaths/isRegExp';

describe('isRegExp', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isRegExp, 'function');
    });
});