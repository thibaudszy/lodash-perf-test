import { describe, it } from 'node:test';
import assert from 'assert';
import tap from 'lodash-es-with-subpaths/tap';

describe('tap', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof tap, function);
    });
});