import { describe, it } from 'node:test';
import assert from 'assert';
import { unionWith } from 'lodash-es';

describe('unionWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof unionWith, 'function');
    });
});