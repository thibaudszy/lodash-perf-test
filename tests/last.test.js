import { describe, it } from 'node:test';
import assert from 'assert';
import { last } from 'lodash-es';

describe('last', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof last, 'function');
    });
});