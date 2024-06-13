import { describe, it } from 'node:test';
import assert from 'assert';
import { sum } from 'lodash-es';

describe('sum', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof sum, 'function');
    });
});