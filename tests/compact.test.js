import { describe, it } from 'node:test';
import assert from 'assert';
import { compact } from 'lodash-es';

describe('compact', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof compact, 'function');
    });
});