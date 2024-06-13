import { describe, it } from 'node:test';
import assert from 'assert';
import { take } from 'lodash-es';

describe('take', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof take, 'function');
    });
});