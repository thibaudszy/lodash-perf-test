import { describe, it } from 'node:test';
import assert from 'assert';
import { trim } from 'lodash-es';

describe('trim', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof trim, 'function');
    });
});