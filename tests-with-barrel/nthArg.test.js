import { describe, it } from 'node:test';
import assert from 'assert';
import { nthArg } from 'lodash-es';

describe('nthArg', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof nthArg, 'function');
    });
});