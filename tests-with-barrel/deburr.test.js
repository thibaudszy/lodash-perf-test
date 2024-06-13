import { describe, it } from 'node:test';
import assert from 'assert';
import { deburr } from 'lodash-es';

describe('deburr', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof deburr, 'function');
    });
});