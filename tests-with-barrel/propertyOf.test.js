import { describe, it } from 'node:test';
import assert from 'assert';
import { propertyOf } from 'lodash-es';

describe('propertyOf', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof propertyOf, 'function');
    });
});