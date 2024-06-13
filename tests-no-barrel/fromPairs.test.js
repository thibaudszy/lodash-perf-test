import { describe, it } from 'node:test';
import assert from 'assert';
import fromPairs from 'lodash-es-with-subpaths/fromPairs';

describe('fromPairs', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof fromPairs, 'function');
    });
});