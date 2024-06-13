import { describe, it } from 'node:test';
import assert from 'assert';
import some from 'lodash-es-with-subpaths/some';

describe('some', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof some, function);
    });
});