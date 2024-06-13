import { describe, it } from 'node:test';
import assert from 'assert';
import { now } from 'lodash-es';

describe('now', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof now, 'function');
    });
});