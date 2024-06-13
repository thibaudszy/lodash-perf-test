import { describe, it } from 'node:test';
import assert from 'assert';
import { isArguments } from 'lodash-es';

describe('isArguments', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isArguments, 'function');
    });
});