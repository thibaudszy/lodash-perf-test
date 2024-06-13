import { describe, it } from 'node:test';
import assert from 'assert';
import isNumber from 'lodash-es-with-subpaths/isNumber';

describe('isNumber', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isNumber, function);
    });
});