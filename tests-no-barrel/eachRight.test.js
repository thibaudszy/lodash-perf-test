import { describe, it } from 'node:test';
import assert from 'assert';
import eachRight from 'lodash-es-with-subpaths/eachRight';

describe('eachRight', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof eachRight, 'function');
    });
});