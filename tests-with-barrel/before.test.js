import { describe, it } from 'node:test';
import assert from 'assert';
import { before } from 'lodash-es';

describe('before', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof before, 'function');
    });
});