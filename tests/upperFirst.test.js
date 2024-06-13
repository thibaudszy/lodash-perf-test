import { describe, it } from 'node:test';
import assert from 'assert';
import { upperFirst } from 'lodash-es';

describe('upperFirst', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof upperFirst, 'function');
    });
});