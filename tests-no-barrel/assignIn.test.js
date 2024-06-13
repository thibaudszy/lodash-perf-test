import { describe, it } from 'node:test';
import assert from 'assert';
import assignIn from 'lodash-es-with-subpaths/assignIn';

describe('assignIn', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof assignIn, 'function');
    });
});