import { describe, it } from 'node:test';
import assert from 'assert';
import isSafeInteger from 'lodash-es-with-subpaths/isSafeInteger';

describe('isSafeInteger', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isSafeInteger, function);
    });
});