import { describe, it } from 'node:test';
import assert from 'assert';
import findKey from 'lodash-es-with-subpaths/findKey';

describe('findKey', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof findKey, function);
    });
});