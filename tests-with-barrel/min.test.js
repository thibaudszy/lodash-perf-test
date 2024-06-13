import { describe, it } from 'node:test';
import assert from 'assert';
import { min } from 'lodash-es';

describe('min', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof min, 'function');
    });
});