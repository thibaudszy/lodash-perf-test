import { describe, it } from 'node:test';
import assert from 'assert';
import identity from 'lodash-es-with-subpaths/identity';

describe('identity', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof identity, 'function');
    });
});