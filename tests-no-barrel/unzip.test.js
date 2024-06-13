import { describe, it } from 'node:test';
import assert from 'assert';
import unzip from 'lodash-es-with-subpaths/unzip';

describe('unzip', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof unzip, function);
    });
});