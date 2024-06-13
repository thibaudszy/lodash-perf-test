import { describe, it } from 'node:test';
import assert from 'assert';
import { forEachRight } from 'lodash-es';

describe('forEachRight', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof forEachRight, function);
    });
});