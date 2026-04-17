function randFloatSpread(range) {
  return range ? (Math.random() - 0.5) * range : 0;
}

function lerp(x, y, t) {
  return (1 - t) * x + t * y;
}

function mapLinear(x, a1, a2, b1, b2) {
  return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
}

module.exports = {randFloatSpread, lerp, mapLinear};
