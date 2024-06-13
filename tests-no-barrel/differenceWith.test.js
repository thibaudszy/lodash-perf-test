import { describe, it } from 'node:test';
import assert from 'assert';
import differenceWith from 'lodash-es-with-subpaths/differenceWith';

describe('differenceWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof differenceWith, 'function');
    });
});