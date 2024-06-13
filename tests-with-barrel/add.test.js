import { describe, it } from 'node:test';
import assert from 'assert';
import { add } from 'lodash-es';

describe('add', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof add, 'function');
    });
});