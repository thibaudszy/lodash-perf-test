import { describe, it } from 'node:test';
import assert from 'assert';
import { cloneWith } from 'lodash-es';

describe('cloneWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof cloneWith, function);
    });
});