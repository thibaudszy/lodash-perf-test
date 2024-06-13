import { describe, it } from 'node:test';
import assert from 'assert';
import { wrap } from 'lodash-es';

describe('wrap', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof wrap, 'function');
    });
});