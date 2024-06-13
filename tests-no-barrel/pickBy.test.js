import { describe, it } from 'node:test';
import assert from 'assert';
import pickBy from 'lodash-es-with-subpaths/pickBy';

describe('pickBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof pickBy, 'function');
    });
});