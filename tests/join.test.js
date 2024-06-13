import { describe, it } from 'node:test';
import assert from 'assert';
import { join } from 'lodash-es';

describe('join', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof join, 'function');
    });
});