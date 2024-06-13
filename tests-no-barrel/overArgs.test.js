import { describe, it } from 'node:test';
import assert from 'assert';
import overArgs from 'lodash-es-with-subpaths/overArgs';

describe('overArgs', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof overArgs, 'function');
    });
});