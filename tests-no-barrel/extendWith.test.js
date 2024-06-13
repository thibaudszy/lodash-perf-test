import { describe, it } from 'node:test';
import assert from 'assert';
import extendWith from 'lodash-es-with-subpaths/extendWith';

describe('extendWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof extendWith, 'function');
    });
});