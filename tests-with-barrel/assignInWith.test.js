import { describe, it } from 'node:test';
import assert from 'assert';
import { assignInWith } from 'lodash-es';

describe('assignInWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof assignInWith, function);
    });
});