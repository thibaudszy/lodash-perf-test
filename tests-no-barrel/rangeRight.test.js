import { describe, it } from 'node:test';
import assert from 'assert';
import rangeRight from 'lodash-es-with-subpaths/rangeRight';

describe('rangeRight', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof rangeRight, 'function');
    });
});