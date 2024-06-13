import { describe, it } from 'node:test';
import assert from 'assert';
import { defaultTo } from 'lodash-es';

describe('defaultTo', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof defaultTo, function);
    });
});