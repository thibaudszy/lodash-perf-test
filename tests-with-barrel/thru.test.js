import { describe, it } from 'node:test';
import assert from 'assert';
import { thru } from 'lodash-es';

describe('thru', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof thru, 'function');
    });
});