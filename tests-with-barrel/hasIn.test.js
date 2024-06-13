import { describe, it } from 'node:test';
import assert from 'assert';
import { hasIn } from 'lodash-es';

describe('hasIn', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof hasIn, 'function');
    });
});