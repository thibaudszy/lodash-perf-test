import { describe, it } from 'node:test';
import assert from 'assert';
import { flatten } from 'lodash-es';

describe('flatten', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof flatten, function);
    });
});