import { describe, it } from 'node:test';
import assert from 'assert';
import deburr from 'lodash-es-with-subpaths/deburr';

describe('deburr', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof deburr, function);
    });
});