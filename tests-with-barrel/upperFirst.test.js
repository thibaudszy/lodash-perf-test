import { describe, it } from 'node:test';
import assert from 'assert';
import { upperFirst } from 'lodash-es';

describe('upperFirst', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof upperFirst, 'function');
    });
});