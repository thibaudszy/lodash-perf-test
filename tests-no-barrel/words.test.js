import { describe, it } from 'node:test';
import assert from 'assert';
import words from 'lodash-es-with-subpaths/words';

describe('words', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof words, 'function');
    });
});