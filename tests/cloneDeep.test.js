import { describe, it } from 'node:test';
import assert from 'assert';
import { cloneDeep } from 'lodash-es';

describe('cloneDeep', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof cloneDeep, 'function');
    });
});