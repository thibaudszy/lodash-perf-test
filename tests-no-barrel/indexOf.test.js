import { describe, it } from 'node:test';
import assert from 'assert';
import indexOf from 'lodash-es-with-subpaths/indexOf';

describe('indexOf', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof indexOf, 'function');
    });
});