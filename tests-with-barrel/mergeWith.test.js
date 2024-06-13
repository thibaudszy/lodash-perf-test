import { describe, it } from 'node:test';
import assert from 'assert';
import { mergeWith } from 'lodash-es';

describe('mergeWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof mergeWith, 'function');
    });
});