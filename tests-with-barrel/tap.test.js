import { describe, it } from 'node:test';
import assert from 'assert';
import { tap } from 'lodash-es';

describe('tap', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof tap, 'function');
    });
});