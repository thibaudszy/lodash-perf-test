import { describe, it } from 'node:test';
import assert from 'assert';
import { castArray } from 'lodash-es';

describe('castArray', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof castArray, 'function');
    });
});