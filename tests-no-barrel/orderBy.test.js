import { describe, it } from 'node:test';
import assert from 'assert';
import orderBy from 'lodash-es-with-subpaths/orderBy';

describe('orderBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof orderBy, function);
    });
});