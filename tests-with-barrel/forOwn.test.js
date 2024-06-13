import { describe, it } from 'node:test';
import assert from 'assert';
import { forOwn } from 'lodash-es';

describe('forOwn', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof forOwn, 'function');
    });
});