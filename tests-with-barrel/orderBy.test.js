import { describe, it } from 'node:test';
import assert from 'assert';
import { orderBy } from 'lodash-es';

describe('orderBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof orderBy, 'function');
    });
});