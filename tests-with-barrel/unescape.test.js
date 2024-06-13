import { describe, it } from 'node:test';
import assert from 'assert';
import { unescape } from 'lodash-es';

describe('unescape', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof unescape, 'function');
    });
});