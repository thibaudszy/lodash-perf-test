import { describe, it } from 'node:test';
import assert from 'assert';
import every from 'lodash-es-with-subpaths/every';

describe('every', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof every, 'function');
    });
});