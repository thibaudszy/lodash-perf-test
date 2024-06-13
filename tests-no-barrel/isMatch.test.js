import { describe, it } from 'node:test';
import assert from 'assert';
import isMatch from 'lodash-es-with-subpaths/isMatch';

describe('isMatch', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isMatch, function);
    });
});