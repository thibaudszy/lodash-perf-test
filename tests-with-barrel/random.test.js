import { describe, it } from 'node:test';
import assert from 'assert';
import { random } from 'lodash-es';

describe('random', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof random, 'function');
    });
});