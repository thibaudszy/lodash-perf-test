import { describe, it } from 'node:test';
import assert from 'assert';
import { noop } from 'lodash-es';

describe('noop', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof noop, 'function');
    });
});