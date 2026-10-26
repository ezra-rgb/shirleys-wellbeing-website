/**
 * Derives the web logo files from design/brand/logo-source.png (white line art on black).
 * Luminance becomes alpha, so every output is white-on-transparent and sits on any dark ground.
 * Run after replacing the source (`npm run brand`) and commit the results.
 */
import sharp from 'sharp';

const SRC = 'design/brand/logo-source.png';
// Bands measured on the 1254 x 1254 source: figures, name. The tagline below is set as live text instead.
const FIGURES = { left: 236, top: 52, width: 788, height: 730 };
const NAME = { left: 170, top: 776, width: 914, height: 356 };
const STACKED = { left: 160, top: 40, width: 934, height: 1100 };

/** Greyscale buffer of a source region, resized. */
const grey = (region, resize) => sharp(SRC).extract(region).greyscale().resize(resize).raw().toBuffer({ resolveWithObject: true });

/** Writes a greyscale raw buffer as white with luminance as alpha. */
async function writeClear({ data, info }, out) {
  const rgba = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0; i < data.length; i++) rgba.set([255, 255, 255, data[i]], i * 4);
  await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } }).png({ compressionLevel: 9 }).toFile(out);
  console.log(`Built ${out}`);
}

/** Horizontal lockup for the header: figures, then the name at 62% of their height. */
async function lockup(height, out) {
  const fig = await grey(FIGURES, { height });
  const name = await grey(NAME, { height: Math.round(height * 0.62) });
  const gap = Math.round(height * 0.14);
  const width = fig.info.width + gap + name.info.width;
  const canvas = Buffer.alloc(width * height);
  const blit = ({ data, info }, x0, y0) => {
    for (let y = 0; y < info.height; y++) data.copy(canvas, (y0 + y) * width + x0, y * info.width, (y + 1) * info.width);
  };
  blit(fig, 0, 0);
  blit(name, fig.info.width + gap, Math.round((height - name.info.height) / 2));
  await writeClear({ data: canvas, info: { width, height } }, out);
}

async function icon(size, out) {
  const pad = Math.round(size * 0.1);
  const mark = await sharp(SRC).extract(FIGURES).resize({ width: size - 2 * pad, height: size - 2 * pad, fit: 'contain', background: '#000000' }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 3, background: '#000000' } })
    .composite([{ input: mark, left: pad, top: pad }]).png().toFile(out);
  console.log(`Built ${out}`);
}

await writeClear(await grey(FIGURES, { width: 720 }), 'src/assets/brand/logo-mark.png');
await writeClear(await grey(STACKED, { width: 640 }), 'src/assets/brand/logo-stacked.png');
await lockup(192, 'src/assets/brand/logo-lockup.png');
await icon(32, 'public/favicon-32.png');
await icon(180, 'public/apple-touch-icon.png');
await icon(512, 'public/icon-512.png');
