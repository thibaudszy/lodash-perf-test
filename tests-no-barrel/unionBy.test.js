import { describe, it } from 'node:test';
import assert from 'assert';
import unionBy from 'lodash-es-with-subpaths/unionBy';

describe('unionBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof unionBy, 'function');
    });
});