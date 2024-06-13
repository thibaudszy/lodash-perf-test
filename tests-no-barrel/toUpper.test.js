import { describe, it } from 'node:test';
import assert from 'assert';
import toUpper from 'lodash-es-with-subpaths/toUpper';

describe('toUpper', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof toUpper, 'function');
    });
});