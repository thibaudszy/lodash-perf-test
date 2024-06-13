import { describe, it } from 'node:test';
import assert from 'assert';
import { forEach } from 'lodash-es';

describe('forEach', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof forEach, 'function');
    });
});