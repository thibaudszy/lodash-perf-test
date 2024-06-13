import { describe, it } from 'node:test';
import assert from 'assert';
import { forEach } from 'lodash-es';

describe('forEach', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof forEach, function);
    });
});