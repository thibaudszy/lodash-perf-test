import { describe, it } from 'node:test';
import assert from 'assert';
import { isMatchWith } from 'lodash-es';

describe('isMatchWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isMatchWith, 'function');
    });
});