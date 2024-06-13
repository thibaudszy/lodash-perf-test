import { describe, it } from 'node:test';
import assert from 'assert';
import lt from 'lodash-es-with-subpaths/lt';

describe('lt', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof lt, 'function');
    });
});