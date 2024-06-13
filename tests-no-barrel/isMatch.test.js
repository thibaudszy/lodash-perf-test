import { describe, it } from 'node:test';
import assert from 'assert';
import isMatch from 'lodash-es-with-subpaths/isMatch';

describe('isMatch', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isMatch, 'function');
    });
});