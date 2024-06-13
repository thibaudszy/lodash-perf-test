import { describe, it } from 'node:test';
import assert from 'assert';
import { stubObject } from 'lodash-es';

describe('stubObject', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof stubObject, 'function');
    });
});