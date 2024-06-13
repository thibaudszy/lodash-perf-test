import { describe, it } from 'node:test';
import assert from 'assert';
import { at } from 'lodash-es';

describe('at', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof at, 'function');
    });
});