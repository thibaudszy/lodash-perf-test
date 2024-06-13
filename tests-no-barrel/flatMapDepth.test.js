import { describe, it } from 'node:test';
import assert from 'assert';
import flatMapDepth from 'lodash-es-with-subpaths/flatMapDepth';

describe('flatMapDepth', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof flatMapDepth, function);
    });
});