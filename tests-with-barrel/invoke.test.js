import { describe, it } from 'node:test';
import assert from 'assert';
import { invoke } from 'lodash-es';

describe('invoke', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof invoke, function);
    });
});