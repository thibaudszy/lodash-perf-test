import { describe, it } from 'node:test';
import assert from 'assert';
import assignIn from 'lodash-es-with-subpaths/assignIn';

describe('assignIn', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof assignIn, function);
    });
});