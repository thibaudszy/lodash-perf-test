import { describe, it } from 'node:test';
import assert from 'assert';
import { pullAt } from 'lodash-es';

describe('pullAt', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof pullAt, function);
    });
});