import { describe, it } from 'node:test';
import assert from 'assert';
import repeat from 'lodash-es-with-subpaths/repeat';

describe('repeat', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof repeat, 'function');
    });
});