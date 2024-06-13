import { describe, it } from 'node:test';
import assert from 'assert';
import omit from 'lodash-es-with-subpaths/omit';

describe('omit', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof omit, 'function');
    });
});