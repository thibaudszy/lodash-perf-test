import { describe, it } from 'node:test';
import assert from 'assert';
import { unset } from 'lodash-es';

describe('unset', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof unset, function);
    });
});