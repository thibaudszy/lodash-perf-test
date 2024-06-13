import { describe, it } from 'node:test';
import assert from 'assert';
import findLast from 'lodash-es-with-subpaths/findLast';

describe('findLast', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof findLast, 'function');
    });
});