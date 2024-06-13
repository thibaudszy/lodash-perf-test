import { describe, it } from 'node:test';
import assert from 'assert';
import matchesProperty from 'lodash-es-with-subpaths/matchesProperty';

describe('matchesProperty', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof matchesProperty, 'function');
    });
});