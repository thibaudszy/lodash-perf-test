import { describe, it } from 'node:test';
import assert from 'assert';
import isArguments from 'lodash-es-with-subpaths/isArguments';

describe('isArguments', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isArguments, 'function');
    });
});