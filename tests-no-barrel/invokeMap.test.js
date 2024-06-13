import { describe, it } from 'node:test';
import assert from 'assert';
import invokeMap from 'lodash-es-with-subpaths/invokeMap';

describe('invokeMap', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof invokeMap, 'function');
    });
});