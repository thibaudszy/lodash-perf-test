import { describe, it } from 'node:test';
import assert from 'assert';
import gt from 'lodash-es-with-subpaths/gt';

describe('gt', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof gt, function);
    });
});