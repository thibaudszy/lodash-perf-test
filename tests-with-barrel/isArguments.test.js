import { describe, it } from 'node:test';
import assert from 'assert';
import { isArguments } from 'lodash-es';

describe('isArguments', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isArguments, function);
    });
});