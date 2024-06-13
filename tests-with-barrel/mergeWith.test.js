import { describe, it } from 'node:test';
import assert from 'assert';
import { mergeWith } from 'lodash-es';

describe('mergeWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof mergeWith, function);
    });
});