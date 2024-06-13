import { describe, it } from 'node:test';
import assert from 'assert';
import { filter } from 'lodash-es';

describe('filter', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof filter, 'function');
    });
});