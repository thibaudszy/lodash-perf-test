import { describe, it } from 'node:test';
import assert from 'assert';
import { findLastIndex } from 'lodash-es';

describe('findLastIndex', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof findLastIndex, 'function');
    });
});