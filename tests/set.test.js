import { describe, it } from 'node:test';
import assert from 'assert';
import { set } from 'lodash-es';

describe('set', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof set, 'function');
    });
});