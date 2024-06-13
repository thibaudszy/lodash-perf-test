import { describe, it } from 'node:test';
import assert from 'assert';
import toPath from 'lodash-es-with-subpaths/toPath';

describe('toPath', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof toPath, 'function');
    });
});