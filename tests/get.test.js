import { describe, it } from 'node:test';
import assert from 'assert';
import { get } from 'lodash-es';

describe('get', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof get, 'function');
    });
});