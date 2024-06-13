import { describe, it } from 'node:test';
import assert from 'assert';
import some from 'lodash-es-with-subpaths/some';

describe('some', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof some, 'function');
    });
});