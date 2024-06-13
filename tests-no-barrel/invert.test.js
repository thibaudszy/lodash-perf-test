import { describe, it } from 'node:test';
import assert from 'assert';
import invert from 'lodash-es-with-subpaths/invert';

describe('invert', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof invert, 'function');
    });
});