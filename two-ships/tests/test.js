const assert = require('assert');
const {randFloatSpread, mapLinear, lerp} = require('../src/math.js');

describe('Two Ships - Tests fournis', () => {
  it('randFloatSpread(1) <= 1', () => {
    assert.strictEqual(randFloatSpread(1) <= 1, true);
  });
  it('randFloatSpread(1) >= -1', () => {
    assert.strictEqual(randFloatSpread(1) >= -1, true);
  });
  it('mapLinear(1,2,3,4,5)', () => {
    assert.strictEqual(mapLinear(1, 2, 3, 4, 5), 3);
  });
  it('mapLinear(1,20,3,40,5)', () => {
    assert.strictEqual(mapLinear(1, 20, 3, 40, 5), 0.882352941176471);
  });
  it('lerp(1,3,20)', () => {
    assert.strictEqual(lerp(1, 3, 20), 41);
  });
  it('lerp(1.3,-7,2)', () => {
    assert.strictEqual(lerp(1.3, -7, 2), -15.3);
  });
});

describe('Two Ships - Nouveaux tests', () => {
  it('lerp(0, 10, 0.5) = 5', () => {
    assert.strictEqual(lerp(0, 10, 0.5), 5);
  });
  it('lerp(0, 0, 0) = 0', () => {
    assert.strictEqual(lerp(0, 0, 0), 0);
  });
  it('mapLinear(5, 0, 10, 0, 100) = 50', () => {
    assert.strictEqual(mapLinear(5, 0, 10, 0, 100), 50);
  });
  it('randFloatSpread(0) = 0', () => {
    assert.strictEqual(randFloatSpread(0), 0);
  });
  it('mapLinear(2, 2, 3, 2, 3) = 2', () => {
    assert.strictEqual(mapLinear(2, 2, 3, 2, 3), 2);
  });
});
