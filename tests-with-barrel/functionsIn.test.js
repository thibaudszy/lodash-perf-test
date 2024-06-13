import { describe, it } from 'node:test';
import assert from 'assert';
import { functionsIn } from 'lodash-es';

describe('functionsIn', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof functionsIn, 'function');
    });
});