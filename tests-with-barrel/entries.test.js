import { describe, it } from 'node:test';
import assert from 'assert';
import { entries } from 'lodash-es';

describe('entries', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof entries, 'function');
    });
});