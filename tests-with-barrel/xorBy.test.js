import { describe, it } from 'node:test';
import assert from 'assert';
import { xorBy } from 'lodash-es';

describe('xorBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof xorBy, 'function');
    });
});