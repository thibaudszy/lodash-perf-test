import { describe, it } from 'node:test';
import assert from 'assert';
import { each } from 'lodash-es';

describe('each', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof each, function);
    });
});