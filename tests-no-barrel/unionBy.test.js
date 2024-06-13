import { describe, it } from 'node:test';
import assert from 'assert';
import unionBy from 'lodash-es-with-subpaths/unionBy';

describe('unionBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof unionBy, function);
    });
});