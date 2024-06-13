import { describe, it } from 'node:test';
import assert from 'assert';
import { once } from 'lodash-es';

describe('once', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof once, 'function');
    });
});