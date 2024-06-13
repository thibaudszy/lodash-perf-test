import { describe, it } from 'node:test';
import assert from 'assert';
import { stubTrue } from 'lodash-es';

describe('stubTrue', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof stubTrue, 'function');
    });
});