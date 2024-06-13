import { describe, it } from 'node:test';
import assert from 'assert';
import size from 'lodash-es-with-subpaths/size';

describe('size', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof size, 'function');
    });
});