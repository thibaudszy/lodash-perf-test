import { describe, it } from 'node:test';
import assert from 'assert';
import chain from 'lodash-es-with-subpaths/chain';

describe('chain', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof chain, 'function');
    });
});