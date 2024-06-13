import { describe, it } from 'node:test';
import assert from 'assert';
import clamp from 'lodash-es-with-subpaths/clamp';

describe('clamp', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof clamp, 'function');
    });
});