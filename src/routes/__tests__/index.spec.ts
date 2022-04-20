import {describe, expect, test} from '@jest/globals';

import {hey} from '../index';

describe('routes test suite', () => {
  describe('hey', () => {
    test('greets with name passed in', () => {
      const greeting = hey('brent');
      expect(greeting.hello).toEqual('brent');
    });
    test('greets with no name passed in', () => {
      const greeting = hey();
      expect(greeting.hello).toEqual('world');
    });
  });
});
