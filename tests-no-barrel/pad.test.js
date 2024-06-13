import { describe, it } from 'node:test';
import assert from 'assert';
import pad from 'lodash-es-with-subpaths/pad';

describe('pad', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof pad, 'function');
    });
});