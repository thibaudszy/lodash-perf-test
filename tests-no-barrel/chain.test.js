import { describe, it } from 'node:test';
import assert from 'assert';
import chain from 'lodash-es-with-subpaths/chain';

describe('chain', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof chain, function);
    });
});