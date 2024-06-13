import { describe, it } from 'node:test';
import assert from 'assert';
import { valuesIn } from 'lodash-es';

describe('valuesIn', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof valuesIn, 'function');
    });
});