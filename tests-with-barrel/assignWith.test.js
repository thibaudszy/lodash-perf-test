import { describe, it } from 'node:test';
import assert from 'assert';
import { assignWith } from 'lodash-es';

describe('assignWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof assignWith, 'function');
    });
});