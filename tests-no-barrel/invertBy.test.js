import { describe, it } from 'node:test';
import assert from 'assert';
import invertBy from 'lodash-es-with-subpaths/invertBy';

describe('invertBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof invertBy, 'function');
    });
});