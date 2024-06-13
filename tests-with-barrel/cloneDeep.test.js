import { describe, it } from 'node:test';
import assert from 'assert';
import { cloneDeep } from 'lodash-es';

describe('cloneDeep', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof cloneDeep, 'function');
    });
});