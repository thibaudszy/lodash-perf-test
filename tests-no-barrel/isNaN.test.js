import { describe, it } from 'node:test';
import assert from 'assert';
import isNaN from 'lodash-es-with-subpaths/isNaN';

describe('isNaN', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isNaN, function);
    });
});