import { describe, it } from 'node:test';
import assert from 'assert';
import { without } from 'lodash-es';

describe('without', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof without, 'function');
    });
});