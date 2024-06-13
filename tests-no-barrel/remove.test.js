import { describe, it } from 'node:test';
import assert from 'assert';
import remove from 'lodash-es-with-subpaths/remove';

describe('remove', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof remove, function);
    });
});