import { describe, it } from 'node:test';
import assert from 'assert';
import { lt } from 'lodash-es';

describe('lt', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof lt, 'function');
    });
});