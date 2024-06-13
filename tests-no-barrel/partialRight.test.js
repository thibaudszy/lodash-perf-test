import { describe, it } from 'node:test';
import assert from 'assert';
import partialRight from 'lodash-es-with-subpaths/partialRight';

describe('partialRight', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof partialRight, function);
    });
});