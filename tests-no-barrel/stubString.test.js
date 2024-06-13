import { describe, it } from 'node:test';
import assert from 'assert';
import stubString from 'lodash-es-with-subpaths/stubString';

describe('stubString', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof stubString, 'function');
    });
});