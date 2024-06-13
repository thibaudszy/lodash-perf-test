import { describe, it } from 'node:test';
import assert from 'assert';
import over from 'lodash-es-with-subpaths/over';

describe('over', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof over, function);
    });
});