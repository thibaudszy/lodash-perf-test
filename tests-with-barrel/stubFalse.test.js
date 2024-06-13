import { describe, it } from 'node:test';
import assert from 'assert';
import { stubFalse } from 'lodash-es';

describe('stubFalse', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof stubFalse, function);
    });
});