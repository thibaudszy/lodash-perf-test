import { describe, it } from 'node:test';
import assert from 'assert';
import forEach from 'lodash-es-with-subpaths/forEach';

describe('forEach', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof forEach, function);
    });
});