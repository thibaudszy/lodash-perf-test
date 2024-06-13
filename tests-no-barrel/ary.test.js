import { describe, it } from 'node:test';
import assert from 'assert';
import ary from 'lodash-es-with-subpaths/ary';

describe('ary', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof ary, 'function');
    });
});