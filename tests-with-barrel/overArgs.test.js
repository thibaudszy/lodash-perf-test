import { describe, it } from 'node:test';
import assert from 'assert';
import { overArgs } from 'lodash-es';

describe('overArgs', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof overArgs, function);
    });
});