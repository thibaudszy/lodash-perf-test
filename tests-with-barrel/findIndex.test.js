import { describe, it } from 'node:test';
import assert from 'assert';
import { findIndex } from 'lodash-es';

describe('findIndex', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof findIndex, 'function');
    });
});