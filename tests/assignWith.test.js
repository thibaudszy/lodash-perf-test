import { describe, it } from 'node:test';
import assert from 'assert';
import { assignWith } from 'lodash-es';

describe('assignWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof assignWith, 'function');
    });
});