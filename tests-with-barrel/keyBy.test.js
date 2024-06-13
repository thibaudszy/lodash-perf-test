import { describe, it } from 'node:test';
import assert from 'assert';
import { keyBy } from 'lodash-es';

describe('keyBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof keyBy, 'function');
    });
});