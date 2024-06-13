import { describe, it } from 'node:test';
import assert from 'assert';
import flowRight from 'lodash-es-with-subpaths/flowRight';

describe('flowRight', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof flowRight, 'function');
    });
});