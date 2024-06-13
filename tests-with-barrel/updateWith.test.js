import { describe, it } from 'node:test';
import assert from 'assert';
import { updateWith } from 'lodash-es';

describe('updateWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof updateWith, function);
    });
});