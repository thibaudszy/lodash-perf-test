import { describe, it } from 'node:test';
import assert from 'assert';
import { findLastKey } from 'lodash-es';

describe('findLastKey', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof findLastKey, 'function');
    });
});