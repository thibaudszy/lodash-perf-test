import { describe, it } from 'node:test';
import assert from 'assert';
import { flatMapDepth } from 'lodash-es';

describe('flatMapDepth', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof flatMapDepth, function);
    });
});