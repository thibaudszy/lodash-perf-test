import { describe, it } from 'node:test';
import assert from 'assert';
import isEqual from 'lodash-es-with-subpaths/isEqual';

describe('isEqual', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isEqual, 'function');
    });
});