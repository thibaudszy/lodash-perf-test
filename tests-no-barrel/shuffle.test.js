import { describe, it } from 'node:test';
import assert from 'assert';
import shuffle from 'lodash-es-with-subpaths/shuffle';

describe('shuffle', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof shuffle, 'function');
    });
});