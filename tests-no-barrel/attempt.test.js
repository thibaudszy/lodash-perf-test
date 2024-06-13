import { describe, it } from 'node:test';
import assert from 'assert';
import attempt from 'lodash-es-with-subpaths/attempt';

describe('attempt', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof attempt, 'function');
    });
});