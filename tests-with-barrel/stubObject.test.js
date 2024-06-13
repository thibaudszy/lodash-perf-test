import { describe, it } from 'node:test';
import assert from 'assert';
import { stubObject } from 'lodash-es';

describe('stubObject', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof stubObject, 'function');
    });
});