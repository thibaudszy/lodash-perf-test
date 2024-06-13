import { describe, it } from 'node:test';
import assert from 'assert';
import orderBy from 'lodash-es-with-subpaths/orderBy';

describe('orderBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof orderBy, 'function');
    });
});