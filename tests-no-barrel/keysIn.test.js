import { describe, it } from 'node:test';
import assert from 'assert';
import keysIn from 'lodash-es-with-subpaths/keysIn';

describe('keysIn', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof keysIn, 'function');
    });
});