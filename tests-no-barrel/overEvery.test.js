import { describe, it } from 'node:test';
import assert from 'assert';
import overEvery from 'lodash-es-with-subpaths/overEvery';

describe('overEvery', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof overEvery, function);
    });
});