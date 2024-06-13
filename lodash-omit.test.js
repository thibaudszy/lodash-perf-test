import { describe, it } from 'node:test';
import assert from 'assert';
import { omit } from 'lodash-es';

describe('omit', () => {
    it('should work', () => {
        assert.deepStrictEqual(omit({a: 1, b: 2}, 'a'), {b: 2});
    });
});
