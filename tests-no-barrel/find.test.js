import { describe, it } from 'node:test';
import assert from 'assert';
import find from 'lodash-es-with-subpaths/find';

describe('find', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof find, function);
    });
});