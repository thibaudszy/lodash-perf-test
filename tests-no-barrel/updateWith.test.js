import { describe, it } from 'node:test';
import assert from 'assert';
import updateWith from 'lodash-es-with-subpaths/updateWith';

describe('updateWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof updateWith, 'function');
    });
});