import { describe, it } from 'node:test';
import assert from 'assert';
import add from 'lodash-es-with-subpaths/add';

describe('add', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof add, function);
    });
});