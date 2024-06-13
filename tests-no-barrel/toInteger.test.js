import { describe, it } from 'node:test';
import assert from 'assert';
import toInteger from 'lodash-es-with-subpaths/toInteger';

describe('toInteger', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof toInteger, 'function');
    });
});