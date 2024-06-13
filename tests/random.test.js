import { describe, it } from 'node:test';
import assert from 'assert';
import { random } from 'lodash-es';

describe('random', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof random, 'function');
    });
});