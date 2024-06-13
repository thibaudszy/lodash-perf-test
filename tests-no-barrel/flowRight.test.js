import { describe, it } from 'node:test';
import assert from 'assert';
import flowRight from 'lodash-es-with-subpaths/flowRight';

describe('flowRight', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof flowRight, function);
    });
});