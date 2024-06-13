import { describe, it } from 'node:test';
import assert from 'assert';
import mergeWith from 'lodash-es-with-subpaths/mergeWith';

describe('mergeWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof mergeWith, 'function');
    });
});