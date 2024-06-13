import { describe, it } from 'node:test';
import assert from 'assert';
import create from 'lodash-es-with-subpaths/create';

describe('create', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof create, 'function');
    });
});