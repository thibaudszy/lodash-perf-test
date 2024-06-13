import { describe, it } from 'node:test';
import assert from 'assert';
import { flatten } from 'lodash-es';

describe('flatten', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof flatten, 'function');
    });
});