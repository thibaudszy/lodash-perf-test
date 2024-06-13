import { describe, it } from 'node:test';
import assert from 'assert';
import functions from 'lodash-es-with-subpaths/functions';

describe('functions', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof functions, function);
    });
});