import { describe, it } from 'node:test';
import assert from 'assert';
import { reverse } from 'lodash-es';

describe('reverse', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof reverse, 'function');
    });
});