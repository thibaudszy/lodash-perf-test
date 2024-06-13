import { describe, it } from 'node:test';
import assert from 'assert';
import { findIndex } from 'lodash-es';

describe('findIndex', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof findIndex, 'function');
    });
});