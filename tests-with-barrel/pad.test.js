import { describe, it } from 'node:test';
import assert from 'assert';
import { pad } from 'lodash-es';

describe('pad', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof pad, 'function');
    });
});