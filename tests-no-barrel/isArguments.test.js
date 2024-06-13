import { describe, it } from 'node:test';
import assert from 'assert';
import isArguments from 'lodash-es-with-subpaths/isArguments';

describe('isArguments', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isArguments, function);
    });
});