import { describe, it } from 'node:test';
import assert from 'assert';
import { zipObjectDeep } from 'lodash-es';

describe('zipObjectDeep', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof zipObjectDeep, 'function');
    });
});