import { describe, it } from 'node:test';
import assert from 'assert';
import { join } from 'lodash-es';

describe('join', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof join, 'function');
    });
});