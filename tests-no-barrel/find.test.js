import { describe, it } from 'node:test';
import assert from 'assert';
import find from 'lodash-es-with-subpaths/find';

describe('find', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof find, 'function');
    });
});