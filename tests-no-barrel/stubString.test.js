import { describe, it } from 'node:test';
import assert from 'assert';
import stubString from 'lodash-es-with-subpaths/stubString';

describe('stubString', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof stubString, function);
    });
});