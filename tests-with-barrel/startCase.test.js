import { describe, it } from 'node:test';
import assert from 'assert';
import { startCase } from 'lodash-es';

describe('startCase', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof startCase, 'function');
    });
});