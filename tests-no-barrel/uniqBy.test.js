import { describe, it } from 'node:test';
import assert from 'assert';
import uniqBy from 'lodash-es-with-subpaths/uniqBy';

describe('uniqBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof uniqBy, 'function');
    });
});