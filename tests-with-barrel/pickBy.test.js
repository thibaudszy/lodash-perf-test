import { describe, it } from 'node:test';
import assert from 'assert';
import { pickBy } from 'lodash-es';

describe('pickBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof pickBy, function);
    });
});