import { describe, it } from 'node:test';
import assert from 'assert';
import toPairsIn from 'lodash-es-with-subpaths/toPairsIn';

describe('toPairsIn', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof toPairsIn, 'function');
    });
});