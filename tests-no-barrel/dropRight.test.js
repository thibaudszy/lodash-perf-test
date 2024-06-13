import { describe, it } from 'node:test';
import assert from 'assert';
import dropRight from 'lodash-es-with-subpaths/dropRight';

describe('dropRight', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof dropRight, 'function');
    });
});