import { describe, it } from 'node:test';
import assert from 'assert';
import { template } from 'lodash-es';

describe('template', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof template, 'function');
    });
});