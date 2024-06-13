import { describe, it } from 'node:test';
import assert from 'assert';
import isEmpty from 'lodash-es-with-subpaths/isEmpty';

describe('isEmpty', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isEmpty, function);
    });
});