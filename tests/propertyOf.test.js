import { describe, it } from 'node:test';
import assert from 'assert';
import { propertyOf } from 'lodash-es';

describe('propertyOf', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof propertyOf, 'function');
    });
});