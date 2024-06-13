import { describe, it } from 'node:test';
import assert from 'assert';
import { fill } from 'lodash-es';

describe('fill', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof fill, 'function');
    });
});