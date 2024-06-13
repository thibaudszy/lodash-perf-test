import { describe, it } from 'node:test';
import assert from 'assert';
import { defaults } from 'lodash-es';

describe('defaults', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof defaults, 'function');
    });
});