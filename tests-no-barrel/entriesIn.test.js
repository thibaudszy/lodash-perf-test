import { describe, it } from 'node:test';
import assert from 'assert';
import entriesIn from 'lodash-es-with-subpaths/entriesIn';

describe('entriesIn', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof entriesIn, 'function');
    });
});