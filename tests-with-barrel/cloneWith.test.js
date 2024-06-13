import { describe, it } from 'node:test';
import assert from 'assert';
import { cloneWith } from 'lodash-es';

describe('cloneWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof cloneWith, 'function');
    });
});