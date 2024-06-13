import { describe, it } from 'node:test';
import assert from 'assert';
import { differenceBy } from 'lodash-es';

describe('differenceBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof differenceBy, 'function');
    });
});