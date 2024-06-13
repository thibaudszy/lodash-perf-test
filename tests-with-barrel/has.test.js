import { describe, it } from 'node:test';
import assert from 'assert';
import { has } from 'lodash-es';

describe('has', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof has, 'function');
    });
});