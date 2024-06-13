import { describe, it } from 'node:test';
import assert from 'assert';
import forInRight from 'lodash-es-with-subpaths/forInRight';

describe('forInRight', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof forInRight, function);
    });
});