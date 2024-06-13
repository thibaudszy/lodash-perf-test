import { describe, it } from 'node:test';
import assert from 'assert';
import defer from 'lodash-es-with-subpaths/defer';

describe('defer', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof defer, function);
    });
});