import { describe, it } from 'node:test';
import assert from 'assert';
import { nthArg } from 'lodash-es';

describe('nthArg', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof nthArg, 'function');
    });
});