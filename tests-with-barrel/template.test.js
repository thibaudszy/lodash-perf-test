import { describe, it } from 'node:test';
import assert from 'assert';
import { template } from 'lodash-es';

describe('template', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof template, function);
    });
});