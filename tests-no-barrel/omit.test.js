import { describe, it } from 'node:test';
import assert from 'assert';
import omit from 'lodash-es-with-subpaths/omit';

describe('omit', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof omit, function);
    });
});