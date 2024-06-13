import { describe, it } from 'node:test';
import assert from 'assert';
import { each } from 'lodash-es';

describe('each', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof each, 'function');
    });
});