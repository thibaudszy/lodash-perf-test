import { describe, it } from 'node:test';
import assert from 'assert';
import { unset } from 'lodash-es';

describe('unset', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof unset, 'function');
    });
});