import { describe, it } from 'node:test';
import assert from 'assert';
import functionsIn from 'lodash-es-with-subpaths/functionsIn';

describe('functionsIn', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof functionsIn, function);
    });
});