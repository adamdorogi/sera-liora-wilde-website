import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const assets = JSON.parse(
  await fs.readFile(path.join(root, "content/assets.json"), "utf8"),
);
const cdn = "https://cf72ccc17751c706e3ca.cdn6.editmysite.com";
const fontBase = "https://fonts.gstatic.com/s/";
const fonts = [
  [
    "baskervville-italic-400.ttf",
    fontBase +
      "baskervville/v20/YA9Hr0yU4l_XOrogbkun3kQQtYOnhgMBaGprdyioUkC4cQ.ttf",
  ],
  [
    "baskervville-normal-400.ttf",
    fontBase +
      "baskervville/v20/YA9Br0yU4l_XOrogbkun3kQ6vLFYXmpq8sRsYuDrugM.ttf",
  ],
  [
    "manrope-normal-400.ttf",
    fontBase + "manrope/v23/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FO_F.ttf",
  ],
  [
    "manrope-normal-500.ttf",
    fontBase + "manrope/v23/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_F.ttf",
  ],
  [
    "manrope-normal-600.ttf",
    fontBase + "manrope/v23/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4jE-_F.ttf",
  ],
  [
    "manrope-normal-700.ttf",
    fontBase + "manrope/v23/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE-_F.ttf",
  ],
  [
    "Baskervville-OFL.txt",
    "https://raw.githubusercontent.com/google/fonts/main/ofl/baskervville/OFL.txt",
  ],
  [
    "Manrope-OFL.txt",
    "https://raw.githubusercontent.com/google/fonts/main/ofl/manrope/OFL.txt",
  ],
];
const exists = async (file) => {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
};
function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc ^= byte;
    for (let n = 0; n < 8; n++) crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
  }
  return (crc ^ 0xffffffff) >>> 0;
}
function withOrigin(bytes, origin) {
  const data = Buffer.from(bytes);
  if (data[0] === 0x89 && data[1] === 0x50) {
    const payload = Buffer.from("Source\0" + origin, "latin1");
    const type = Buffer.from("tEXt");
    const len = Buffer.alloc(4);
    len.writeUInt32BE(payload.length);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(Buffer.concat([type, payload])));
    return Buffer.concat([
      data.subarray(0, 33),
      len,
      type,
      payload,
      crc,
      data.subarray(33),
    ]);
  }
  if (data[0] === 0xff && data[1] === 0xd8) {
    const payload = Buffer.from("Source: " + origin);
    const header = Buffer.alloc(4);
    header[0] = 0xff;
    header[1] = 0xfe;
    header.writeUInt16BE(payload.length + 2, 2);
    return Buffer.concat([
      data.subarray(0, 2),
      header,
      payload,
      data.subarray(2),
    ]);
  }
  return data;
}
async function download(file, url, origin = false) {
  if (await exists(file)) return;
  const response = await fetch(url, { signal: AbortSignal.timeout(45000) });
  if (!response.ok)
    throw new Error(`Asset download failed (${response.status}): ${url}`);
  let data = Buffer.from(await response.arrayBuffer());
  if (origin) data = withOrigin(data, url);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, data);
}
const tasks = [
  ...assets.map((a) => async () => {
    if (!/^\/images\/[a-f0-9]+\.(png|jpe?g|webp)$/.test(a.local))
      throw new Error("Unexpected asset path");
    const url = a.source.startsWith("/") ? cdn + a.source : a.source;
    await download(path.join(root, "public", a.local.slice(1)), url, true);
  }),
  ...fonts.map(
    ([name, url]) =>
      async () =>
        download(path.join(root, "public/fonts", name), url),
  ),
];
let index = 0;
await Promise.all(
  Array.from({ length: 6 }, async () => {
    while (index < tasks.length) {
      const task = tasks[index++];
      await task();
    }
  }),
);
for (const [name, ext] of [
  ["616a7c7e5410", "jpg"],
  ["179f1f0ed60a", "jpeg"],
  ["8614391be94e", "jpg"],
  ["019077963868", "jpeg"],
]) {
  const target = path.join(root, "public/images", name + ".png");
  if (await exists(target)) continue;
  const origin = assets.find((a) => a.local === `/images/${name}.${ext}`);
  const data = await sharp(path.join(root, "public/images", name + "." + ext))
    .png()
    .toBuffer();
  await fs.writeFile(
    target,
    withOrigin(data, cdn + origin.source + " ; PNG format conversion only"),
  );
}
console.log("Business photography and locally hosted fonts are ready.");
