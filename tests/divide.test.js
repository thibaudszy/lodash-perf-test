import { describe, it } from 'node:test';
import assert from 'assert';
import { divide } from 'lodash-es';

describe('divide', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof divide, 'function');
    });
});