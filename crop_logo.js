const fs = require('fs');
const { PNG } = require('pngjs');

const rawPng = PNG.sync.read(fs.readFileSync('assets/logo_official.png'));
const W = rawPng.width;
const H = rawPng.height;

// 1. Crop horizontal logo (left half: x: 0 to 1350, y: 300 to 700)
// Let's find bounding box of the left side
let minX = W, maxX = 0, minY = H, maxY = 0;
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W * 0.5; x++) {
    const idx = (y * W + x) * 4;
    const r = rawPng.data[idx];
    const g = rawPng.data[idx + 1];
    const b = rawPng.data[idx + 2];
    const a = rawPng.data[idx + 3];
    // if not white
    if (a > 10 && !(r > 245 && g > 245 && b > 245)) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

// Add padding
const pad = 30;
minX = Math.max(0, minX - pad);
maxX = Math.min(W * 0.5, maxX + pad);
minY = Math.max(0, minY - pad);
maxY = Math.min(H, maxY + pad);

const cropW = Math.round(maxX - minX);
const cropH = Math.round(maxY - minY);

const cropped = new PNG({ width: cropW, height: cropH });
const croppedWhite = new PNG({ width: cropW, height: cropH });

for (let y = 0; y < cropH; y++) {
  for (let x = 0; x < cropW; x++) {
    const srcIdx = ((minY + y) * W + (minX + x)) * 4;
    const dstIdx = (y * cropW + x) * 4;

    const r = rawPng.data[srcIdx];
    const g = rawPng.data[srcIdx + 1];
    const b = rawPng.data[srcIdx + 2];

    const isWhiteBg = (r > 240 && g > 240 && b > 240);

    if (isWhiteBg) {
      cropped.data[dstIdx + 3] = 0; // transparent
      croppedWhite.data[dstIdx + 3] = 0;
    } else {
      cropped.data[dstIdx] = r;
      cropped.data[dstIdx + 1] = g;
      cropped.data[dstIdx + 2] = b;
      cropped.data[dstIdx + 3] = 255;

      // In white version: if it's blue circle, keep blue! If it's black text, make white!
      const isBlue = (b > 160 && r < 80);
      if (isBlue) {
        croppedWhite.data[dstIdx] = r;
        croppedWhite.data[dstIdx + 1] = g;
        croppedWhite.data[dstIdx + 2] = b;
        croppedWhite.data[dstIdx + 3] = 255;
      } else {
        // Text to white
        croppedWhite.data[dstIdx] = 255;
        croppedWhite.data[dstIdx + 1] = 255;
        croppedWhite.data[dstIdx + 2] = 255;
        croppedWhite.data[dstIdx + 3] = 255;
      }
    }
  }
}

fs.writeFileSync('assets/logo_official_dark.png', PNG.sync.write(cropped));
fs.writeFileSync('assets/logo_official_white.png', PNG.sync.write(croppedWhite));
console.log('Successfully generated assets/logo_official_dark.png and assets/logo_official_white.png');
