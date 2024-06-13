import { describe, it } from 'node:test';
import assert from 'assert';
import { initial } from 'lodash-es';

describe('initial', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof initial, 'function');
    });
});