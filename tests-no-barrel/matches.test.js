import { describe, it } from 'node:test';
import assert from 'assert';
import matches from 'lodash-es-with-subpaths/matches';

describe('matches', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof matches, 'function');
    });
});