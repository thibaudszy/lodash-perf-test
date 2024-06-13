import { describe, it } from 'node:test';
import assert from 'assert';
import tail from 'lodash-es-with-subpaths/tail';

describe('tail', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof tail, function);
    });
});