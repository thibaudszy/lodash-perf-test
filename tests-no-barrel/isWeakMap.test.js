import { describe, it } from 'node:test';
import assert from 'assert';
import isWeakMap from 'lodash-es-with-subpaths/isWeakMap';

describe('isWeakMap', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isWeakMap, 'function');
    });
});