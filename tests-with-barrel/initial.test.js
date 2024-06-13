import { describe, it } from 'node:test';
import assert from 'assert';
import { initial } from 'lodash-es';

describe('initial', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof initial, 'function');
    });
});