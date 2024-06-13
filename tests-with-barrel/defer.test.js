import { describe, it } from 'node:test';
import assert from 'assert';
import { defer } from 'lodash-es';

describe('defer', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof defer, 'function');
    });
});