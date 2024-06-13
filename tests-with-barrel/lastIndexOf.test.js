import { describe, it } from 'node:test';
import assert from 'assert';
import { lastIndexOf } from 'lodash-es';

describe('lastIndexOf', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof lastIndexOf, 'function');
    });
});