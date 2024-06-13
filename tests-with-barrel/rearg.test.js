import { describe, it } from 'node:test';
import assert from 'assert';
import { rearg } from 'lodash-es';

describe('rearg', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof rearg, 'function');
    });
});