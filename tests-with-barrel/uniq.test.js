import { describe, it } from 'node:test';
import assert from 'assert';
import { uniq } from 'lodash-es';

describe('uniq', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof uniq, 'function');
    });
});