import { describe, it } from 'node:test';
import assert from 'assert';
import { merge } from 'lodash-es';

describe('merge', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof merge, 'function');
    });
});