import { describe, it } from 'node:test';
import assert from 'assert';
import { curryRight } from 'lodash-es';

describe('curryRight', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof curryRight, 'function');
    });
});