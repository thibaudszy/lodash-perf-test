import { describe, it } from 'node:test';
import assert from 'assert';
import { findLastIndex } from 'lodash-es';

describe('findLastIndex', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof findLastIndex, 'function');
    });
});