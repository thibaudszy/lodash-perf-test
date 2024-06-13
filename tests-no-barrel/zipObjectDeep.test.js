import { describe, it } from 'node:test';
import assert from 'assert';
import zipObjectDeep from 'lodash-es-with-subpaths/zipObjectDeep';

describe('zipObjectDeep', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof zipObjectDeep, function);
    });
});