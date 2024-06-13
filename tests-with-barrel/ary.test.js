import { describe, it } from 'node:test';
import assert from 'assert';
import { ary } from 'lodash-es';

describe('ary', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof ary, 'function');
    });
});