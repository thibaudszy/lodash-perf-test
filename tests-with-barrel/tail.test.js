import { describe, it } from 'node:test';
import assert from 'assert';
import { tail } from 'lodash-es';

describe('tail', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof tail, 'function');
    });
});