import { describe, it } from 'node:test';
import assert from 'assert';
import omitBy from 'lodash-es-with-subpaths/omitBy';

describe('omitBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof omitBy, 'function');
    });
});