import { describe, it } from 'node:test';
import assert from 'assert';
import forOwn from 'lodash-es-with-subpaths/forOwn';

describe('forOwn', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof forOwn, function);
    });
});