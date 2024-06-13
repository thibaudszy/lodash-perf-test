import { describe, it } from 'node:test';
import assert from 'assert';
import round from 'lodash-es-with-subpaths/round';

describe('round', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof round, 'function');
    });
});