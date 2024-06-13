import { describe, it } from 'node:test';
import assert from 'assert';
import constant from 'lodash-es-with-subpaths/constant';

describe('constant', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof constant, function);
    });
});