import { describe, it } from 'node:test';
import assert from 'assert';
import { toNumber } from 'lodash-es';

describe('toNumber', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof toNumber, 'function');
    });
});