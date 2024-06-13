import { describe, it } from 'node:test';
import assert from 'assert';
import isSet from 'lodash-es-with-subpaths/isSet';

describe('isSet', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isSet, 'function');
    });
});