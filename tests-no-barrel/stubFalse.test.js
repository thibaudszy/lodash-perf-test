import { describe, it } from 'node:test';
import assert from 'assert';
import stubFalse from 'lodash-es-with-subpaths/stubFalse';

describe('stubFalse', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof stubFalse, 'function');
    });
});