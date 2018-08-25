/* -*- mode: web -*- */

// @flow

export const TEST_ADD_COUNT = 'TEST_ADD_COUNT';
export function testAddCount(num: ?Number) {
  return {
    type: TEST_ADD_COUNT,
    num
  };
}
