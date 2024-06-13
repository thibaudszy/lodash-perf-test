import { describe, it } from 'node:test';
import assert from 'assert';
import isMap from 'lodash-es-with-subpaths/isMap';

describe('isMap', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isMap, 'function');
    });
});