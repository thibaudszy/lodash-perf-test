import { describe, it } from 'node:test';
import assert from 'assert';
import multiply from 'lodash-es-with-subpaths/multiply';

describe('multiply', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof multiply, function);
    });
});