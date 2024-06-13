import { describe, it } from 'node:test';
import assert from 'assert';
import { forInRight } from 'lodash-es';

describe('forInRight', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof forInRight, 'function');
    });
});