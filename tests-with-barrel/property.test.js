import { describe, it } from 'node:test';
import assert from 'assert';
import { property } from 'lodash-es';

describe('property', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof property, function);
    });
});