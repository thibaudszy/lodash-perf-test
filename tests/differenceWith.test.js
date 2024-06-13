import { describe, it } from 'node:test';
import assert from 'assert';
import { differenceWith } from 'lodash-es';

describe('differenceWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof differenceWith, 'function');
    });
});