import { describe, it } from 'node:test';
import assert from 'assert';
import defaultsDeep from 'lodash-es-with-subpaths/defaultsDeep';

describe('defaultsDeep', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof defaultsDeep, 'function');
    });
});