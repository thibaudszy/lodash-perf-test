import { describe, it } from 'node:test';
import assert from 'assert';
import noop from 'lodash-es-with-subpaths/noop';

describe('noop', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof noop, function);
    });
});