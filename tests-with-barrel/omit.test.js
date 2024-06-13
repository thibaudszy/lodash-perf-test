import { describe, it } from 'node:test';
import assert from 'assert';
import { omit } from 'lodash-es';

describe('omit', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof omit, 'function');
    });
});