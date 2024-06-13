import { describe, it } from 'node:test';
import assert from 'assert';
import omitBy from 'lodash-es-with-subpaths/omitBy';

describe('omitBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof omitBy, function);
    });
});