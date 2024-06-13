import { describe, it } from 'node:test';
import assert from 'assert';
import toNumber from 'lodash-es-with-subpaths/toNumber';

describe('toNumber', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof toNumber, function);
    });
});