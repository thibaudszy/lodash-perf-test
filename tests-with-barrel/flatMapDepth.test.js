import { describe, it } from 'node:test';
import assert from 'assert';
import { flatMapDepth } from 'lodash-es';

describe('flatMapDepth', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof flatMapDepth, 'function');
    });
});