import { describe, it } from 'node:test';
import assert from 'assert';
import { inRange } from 'lodash-es';

describe('inRange', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof inRange, 'function');
    });
});