import { describe, it } from 'node:test';
import assert from 'assert';
import { rearg } from 'lodash-es';

describe('rearg', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof rearg, function);
    });
});