import { describe, it } from 'node:test';
import assert from 'assert';
import forIn from 'lodash-es-with-subpaths/forIn';

describe('forIn', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof forIn, 'function');
    });
});