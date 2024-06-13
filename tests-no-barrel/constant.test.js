import { describe, it } from 'node:test';
import assert from 'assert';
import constant from 'lodash-es-with-subpaths/constant';

describe('constant', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof constant, 'function');
    });
});