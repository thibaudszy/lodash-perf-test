import { describe, it } from 'node:test';
import assert from 'assert';
import templateSettings from 'lodash-es-with-subpaths/templateSettings';

describe('templateSettings', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof templateSettings, 'object');
    });
});