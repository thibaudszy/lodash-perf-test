import { describe, it } from 'node:test';
import assert from 'assert';
import valuesIn from 'lodash-es-with-subpaths/valuesIn';

describe('valuesIn', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof valuesIn, 'function');
    });
});