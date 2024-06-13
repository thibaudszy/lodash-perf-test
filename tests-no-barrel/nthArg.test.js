import { describe, it } from 'node:test';
import assert from 'assert';
import nthArg from 'lodash-es-with-subpaths/nthArg';

describe('nthArg', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof nthArg, 'function');
    });
});