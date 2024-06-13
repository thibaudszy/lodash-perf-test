import { describe, it } from 'node:test';
import assert from 'assert';
import { assignInWith } from 'lodash-es';

describe('assignInWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof assignInWith, 'function');
    });
});