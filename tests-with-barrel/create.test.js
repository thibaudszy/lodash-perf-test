import { describe, it } from 'node:test';
import assert from 'assert';
import { create } from 'lodash-es';

describe('create', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof create, function);
    });
});