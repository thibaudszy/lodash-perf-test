import { describe, it } from 'node:test';
import assert from 'assert';
import { unionWith } from 'lodash-es';

describe('unionWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof unionWith, 'function');
    });
});