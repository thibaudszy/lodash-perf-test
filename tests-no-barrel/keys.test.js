import { describe, it } from 'node:test';
import assert from 'assert';
import keys from 'lodash-es-with-subpaths/keys';

describe('keys', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof keys, function);
    });
});