import { describe, it } from 'node:test';
import assert from 'assert';
import defaultsDeep from 'lodash-es-with-subpaths/defaultsDeep';

describe('defaultsDeep', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof defaultsDeep, function);
    });
});