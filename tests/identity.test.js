import { describe, it } from 'node:test';
import assert from 'assert';
import { identity } from 'lodash-es';

describe('identity', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof identity, 'function');
    });
});