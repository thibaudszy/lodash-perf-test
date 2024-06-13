import { describe, it } from 'node:test';
import assert from 'assert';
import isWeakSet from 'lodash-es-with-subpaths/isWeakSet';

describe('isWeakSet', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isWeakSet, function);
    });
});