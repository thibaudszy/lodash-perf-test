import { describe, it } from 'node:test';
import assert from 'assert';
import countBy from 'lodash-es-with-subpaths/countBy';

describe('countBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof countBy, 'function');
    });
});