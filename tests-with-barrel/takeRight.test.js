import { describe, it } from 'node:test';
import assert from 'assert';
import { takeRight } from 'lodash-es';

describe('takeRight', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof takeRight, 'function');
    });
});