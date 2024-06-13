import { describe, it } from 'node:test';
import assert from 'assert';
import { findLast } from 'lodash-es';

describe('findLast', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof findLast, 'function');
    });
});