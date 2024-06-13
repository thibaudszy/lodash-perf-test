import { describe, it } from 'node:test';
import assert from 'assert';
import { startsWith } from 'lodash-es';

describe('startsWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof startsWith, 'function');
    });
});