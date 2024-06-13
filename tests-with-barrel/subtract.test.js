import { describe, it } from 'node:test';
import assert from 'assert';
import { subtract } from 'lodash-es';

describe('subtract', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof subtract, 'function');
    });
});