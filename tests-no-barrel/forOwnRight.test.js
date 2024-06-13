import { describe, it } from 'node:test';
import assert from 'assert';
import forOwnRight from 'lodash-es-with-subpaths/forOwnRight';

describe('forOwnRight', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof forOwnRight, 'function');
    });
});