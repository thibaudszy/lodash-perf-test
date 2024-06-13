import { describe, it } from 'node:test';
import assert from 'assert';
import lowerFirst from 'lodash-es-with-subpaths/lowerFirst';

describe('lowerFirst', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof lowerFirst, 'function');
    });
});