import { describe, it } from 'node:test';
import assert from 'assert';
import { extendWith } from 'lodash-es';

describe('extendWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof extendWith, function);
    });
});