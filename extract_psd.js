const fs = require('fs');
const { PNG } = require('pngjs');
const { readPsd, initializeCanvas } = require('ag-psd');

// Polyfill canvas using pngjs
initializeCanvas(
  (width, height) => {
    const png = new PNG({ width, height });
    return {
      width,
      height,
      data: png.data,
      getContext: () => ({
        getImageData: (x, y, w, h) => png,
        putImageData: (imageData, x, y) => {
          imageData.data.copy(png.data);
        }
      })
    };
  },
  (width, height) => {
    return new PNG({ width, height });
  }
);

try {
  const buf = fs.readFileSync('Logo - Digital Up Web.psd');
  const psd = readPsd(buf);
  console.log('PSD read successfully!');
  console.log('Dimensions:', psd.width, 'x', psd.height);
  
  if (psd.canvas && psd.canvas.data) {
    fs.writeFileSync('assets/logo_official.png', PNG.sync.write(psd.canvas));
    console.log('Saved assets/logo_official.png');
  } else if (psd.children) {
    console.log('Layers count:', psd.children.length);
    psd.children.forEach((c, idx) => {
      console.log(`Layer ${idx}:`, c.name, c.width, c.height);
      if (c.canvas && c.canvas.data) {
        fs.writeFileSync(`assets/logo_layer_${idx}.png`, PNG.sync.write(c.canvas));
      }
    });
  }
} catch (e) {
  console.error('Error:', e);
}
