import { describe, it } from 'node:test';
import assert from 'assert';
import unzip from 'lodash-es-with-subpaths/unzip';

describe('unzip', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof unzip, 'function');
    });
});