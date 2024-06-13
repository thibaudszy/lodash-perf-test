import { describe, it } from 'node:test';
import assert from 'assert';
import { times } from 'lodash-es';

describe('times', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof times, 'function');
    });
});