import { describe, it } from 'node:test';
import assert from 'assert';
import { pullAt } from 'lodash-es';

describe('pullAt', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof pullAt, 'function');
    });
});