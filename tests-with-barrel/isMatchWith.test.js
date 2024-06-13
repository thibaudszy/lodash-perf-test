import { describe, it } from 'node:test';
import assert from 'assert';
import { isMatchWith } from 'lodash-es';

describe('isMatchWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isMatchWith, function);
    });
});