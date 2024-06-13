import { describe, it } from 'node:test';
import assert from 'assert';
import { startsWith } from 'lodash-es';

describe('startsWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof startsWith, 'function');
    });
});