import { describe, it } from 'node:test';
import assert from 'assert';
import { keys } from 'lodash-es';

describe('keys', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof keys, 'function');
    });
});