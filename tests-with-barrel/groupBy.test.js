import { describe, it } from 'node:test';
import assert from 'assert';
import { groupBy } from 'lodash-es';

describe('groupBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof groupBy, function);
    });
});