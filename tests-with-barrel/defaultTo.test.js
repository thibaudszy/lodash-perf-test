import { describe, it } from 'node:test';
import assert from 'assert';
import { defaultTo } from 'lodash-es';

describe('defaultTo', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof defaultTo, 'function');
    });
});