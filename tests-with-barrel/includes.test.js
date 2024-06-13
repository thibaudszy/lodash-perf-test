import { describe, it } from 'node:test';
import assert from 'assert';
import { includes } from 'lodash-es';

describe('includes', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof includes, 'function');
    });
});