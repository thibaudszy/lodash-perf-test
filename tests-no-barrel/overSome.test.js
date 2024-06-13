import { describe, it } from 'node:test';
import assert from 'assert';
import overSome from 'lodash-es-with-subpaths/overSome';

describe('overSome', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof overSome, 'function');
    });
});