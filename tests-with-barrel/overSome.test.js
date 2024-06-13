import { describe, it } from 'node:test';
import assert from 'assert';
import { overSome } from 'lodash-es';

describe('overSome', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof overSome, function);
    });
});