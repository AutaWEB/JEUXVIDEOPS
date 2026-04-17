const assert = require('assert');
const {
  getRandomInt,
  rectIntersect,
  circleIntersect,
  timeToString,
} = require('../src/math.js');

describe('SpaceWord - Tests fournis', () => {
  it('getRandomInt(-42, 42) < 43', () => {
    assert.strictEqual(getRandomInt(-42, 42) < 43, true);
  });
  it('getRandomInt(42, 42)', () => {
    assert.strictEqual(getRandomInt(42, 42), 42);
  });
  it('rectIntersect(1, 1, 2, 1, 4, 1, 1, 2)', () => {
    assert.strictEqual(rectIntersect(1, 1, 2, 1, 4, 1, 1, 2), false);
  });
  it('rectIntersect(1, 1, 5, 2, 4, 1, 1, 2)', () => {
    assert.strictEqual(rectIntersect(1, 1, 5, 2, 4, 1, 1, 2), true);
  });
  it('circleIntersect(3, 2, 1, 6, 1, 1.5)', () => {
    assert.strictEqual(circleIntersect(3, 2, 1, 6, 1, 1.5), false);
  });
  it('circleIntersect(3, 2, 1, 3, -2, 4)', () => {
    assert.strictEqual(circleIntersect(3, 2, 1, 3, -2, 4), true);
  });
  it('timeToString(123456789)', () => {
    assert.strictEqual(timeToString(123456789), '17:36:78');
  });
  it('timeToString("toto")', () => {
    assert.strictEqual(timeToString('toto'), 'NaN:NaN:NaN');
  });
});

describe('SpaceWord - Nouveaux tests', () => {
  it('getRandomInt(0, 0) = 0', () => {
    assert.strictEqual(getRandomInt(0, 0), 0);
  });
  it('timeToString(0) = "00:00:00"', () => {
    assert.strictEqual(timeToString(0), '00:00:00');
  });
  it('rectIntersect(0, 0, 1, 1, 10, 10, 1, 1) = false', () => {
    assert.strictEqual(rectIntersect(0, 0, 1, 1, 10, 10, 1, 1), false);
  });
  it('circleIntersect(0, 0, 1, 0, 0, 1) = true', () => {
    assert.strictEqual(circleIntersect(0, 0, 1, 0, 0, 1), true);
  });
  it('circleIntersect(0, 0, 1, 10, 10, 1) = false', () => {
    assert.strictEqual(circleIntersect(0, 0, 1, 10, 10, 1), false);
  });
});
