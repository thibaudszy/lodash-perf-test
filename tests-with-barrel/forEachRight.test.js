import { describe, it } from 'node:test';
import assert from 'assert';
import { forEachRight } from 'lodash-es';

describe('forEachRight', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof forEachRight, 'function');
    });
});