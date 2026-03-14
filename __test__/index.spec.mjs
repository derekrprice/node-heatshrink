import test from 'ava'

import { decodeSync, encodeSync, encode, decode } from '../index.js'

test('Test sync w13 l4', (t) => {
  const buf = Buffer.from([1, 1, 4, 5, 1, 4, 1, 9, 1, 9, 1, 1, 4, 5, 1, 4, 1, 9, 1, 9, 1, 1, 4, 5, 1, 4, 1, 9, 1, 9]);
  const encoded = encodeSync(buf, 13, 4);
  console.log('Encoded content:', encoded);
  const decoded = decodeSync(encoded, 13, 4);
  console.log('Decoded content:', decoded);

  t.true(Buffer.compare(buf, decoded) === 0)
})

test('Test async w13 l4', async (t) => {
  const buf = Buffer.from([1, 1, 4, 5, 1, 4, 1, 9, 1, 9, 1, 1, 4, 5, 1, 4, 1, 9, 1, 9, 1, 1, 4, 5, 1, 4, 1, 9, 1, 9]);
  const encoded = await encode(buf, 13, 4);
  console.log('Encoded content:', encoded);
  const decoded = await decode(encoded, 13, 4);
  console.log('Decoded content:', decoded);

  t.true(Buffer.compare(buf, decoded) === 0)
})

test('Test sync w8 l4', (t) => {
  const buf = Buffer.from([1, 1, 4, 5, 1, 4, 1, 9, 1, 9, 1, 1, 4, 5, 1, 4, 1, 9, 1, 9, 1, 1, 4, 5, 1, 4, 1, 9, 1, 9]);
  const encoded = encodeSync(buf, 8, 4);
  console.log('Encoded content:', encoded);
  const decoded = decodeSync(encoded, 8, 4);
  console.log('Decoded content:', decoded);

  t.true(Buffer.compare(buf, decoded) === 0)
})

test('Test async w8 l4', async (t) => {
  const buf = Buffer.from([1, 1, 4, 5, 1, 4, 1, 9, 1, 9, 1, 1, 4, 5, 1, 4, 1, 9, 1, 9, 1, 1, 4, 5, 1, 4, 1, 9, 1, 9]);
  const encoded = await encode(buf, 8, 4);
  console.log('Encoded content:', encoded);
  const decoded = await decode(encoded, 8, 4);
  console.log('Decoded content:', decoded);

  t.true(Buffer.compare(buf, decoded) === 0)
})

test('Test sync w11 l4', (t) => {
  const buf = Buffer.from([1, 1, 4, 5, 1, 4, 1, 9, 1, 9, 1, 1, 4, 5, 1, 4, 1, 9, 1, 9, 1, 1, 4, 5, 1, 4, 1, 9, 1, 9]);
  const encoded = encodeSync(buf, 11, 4);
  console.log('Encoded content:', encoded);
  const decoded = decodeSync(encoded, 11, 4);
  console.log('Decoded content:', decoded);

  t.true(Buffer.compare(buf, decoded) === 0)
})

test('Test async w11 l4', async (t) => {
  const buf = Buffer.from([1, 1, 4, 5, 1, 4, 1, 9, 1, 9, 1, 1, 4, 5, 1, 4, 1, 9, 1, 9, 1, 1, 4, 5, 1, 4, 1, 9, 1, 9]);
  const encoded = await encode(buf, 11, 4);
  console.log('Encoded content:', encoded);
  const decoded = await decode(encoded, 11, 4);
  console.log('Decoded content:', decoded);

  t.true(Buffer.compare(buf, decoded) === 0)
})

const chineseString = "心上的人儿 有笑的脸庞 他曾在深秋 给我春光 心上的人儿 有多少宝藏 他能在黑夜 给我太阳 我不能够给谁夺走仅有的春光 我不能够让谁吹熄胸中的太阳 心上的人儿 你不要悲伤 愿你的笑容 永远那样 我不能够给谁夺走仅有的春光 我不能够让谁吹熄胸中的太阳 心上的人儿 你不要悲伤 愿你的笑容 永远那样";

test('Test sync w11 l4 chinese', (t) => {
  const buf = Buffer.from(chineseString);
  const encoded = encodeSync(buf, 11, 4);
  console.log('Encoded content len:', encoded.length);
  const decoded = decodeSync(encoded, 11, 4);
  console.log('Decoded content len:', decoded.length);

  t.true(Buffer.compare(buf, decoded) === 0)
})

test('Test async w11 l4 chinese', async (t) => {
  const buf = Buffer.from(chineseString);
  const encoded = await encode(buf, 11, 4);
  console.log('Encoded content len:', encoded.length);
  const decoded = await decode(encoded, 11, 4);  
  console.log('Decoded content len:', decoded.length);

  t.true(Buffer.compare(buf, decoded) === 0)
})

test('Test sync w10 l5 chinese', (t) => {
  const buf = Buffer.from(chineseString);
  const encoded = encodeSync(buf, 10, 5);
  console.log('Encoded content len:', encoded.length);
  const decoded = decodeSync(encoded, 10, 5);
  console.log('Decoded content len:', decoded.length);

  t.true(Buffer.compare(buf, decoded) === 0)
})

test('Test async w10 l5 chinese', async (t) => {
  const buf = Buffer.from(chineseString);
  const encoded = await encode(buf, 10, 5);
  console.log('Encoded content len:', encoded.length);
  const decoded = await decode(encoded, 10, 5);  
  console.log('Decoded content len:', decoded.length);

  t.true(Buffer.compare(buf, decoded) === 0)
})

test('Test sync w8 l4 chinese', (t) => {
  const buf = Buffer.from(chineseString);
  const encoded = encodeSync(buf, 8, 4);
  console.log('Encoded content len:', encoded.length);
  const decoded = decodeSync(encoded, 8, 4);
  console.log('Decoded content len:', decoded.length);

  t.true(Buffer.compare(buf, decoded) === 0)
})

test('Test async w8 l4 chinese', async (t) => {
  const buf = Buffer.from(chineseString);
  const encoded = await encode(buf, 8, 4);
  console.log('Encoded content len:', encoded.length);
  const decoded = await decode(encoded, 8, 4);  
  console.log('Decoded content len:', decoded.length);

  t.true(Buffer.compare(buf, decoded) === 0)
})

test('Test sync w13 l5 chinese', (t) => {
  const buf = Buffer.from(chineseString);
  const encoded = encodeSync(buf, 13, 5);
  console.log('Encoded content len:', encoded.length);
  const decoded = decodeSync(encoded, 13, 5);
  console.log('Decoded content len:', decoded.length);

  t.true(Buffer.compare(buf, decoded) === 0)
})

test('Test async w13 l5 chinese', async (t) => {
  const buf = Buffer.from(chineseString);
  const encoded = await encode(buf, 13, 5);
  console.log('Encoded content len:', encoded.length);
  const decoded = await decode(encoded, 13, 5);  
  console.log('Decoded content len:', decoded.length);

  t.true(Buffer.compare(buf, decoded) === 0)
})

test('Test sync w6 l3 chinese', (t) => {
  const buf = Buffer.from(chineseString);
  const encoded = encodeSync(buf, 6, 3);
  console.log('Encoded content len:', encoded.length);
  const decoded = decodeSync(encoded, 6, 3);
  console.log('Decoded content len:', decoded.length);

  t.true(Buffer.compare(buf, decoded) === 0)
})

test('Test async w6 l3 chinese', async (t) => {
  const buf = Buffer.from(chineseString);
  const encoded = await encode(buf, 6, 3);
  console.log('Encoded content len:', encoded.length);
  const decoded = await decode(encoded, 6, 3);
  console.log('Decoded content len:', decoded.length);

  t.true(Buffer.compare(buf, decoded) === 0)
})

// ── High compression ratio tests ──────────────────────────────────
// These exercise the buffer retry logic: highly repetitive data
// compresses to a tiny fraction of its original size, so the initial
// decode output buffer (4x compressed size) is too small and the
// decoder must retry with a larger buffer.

function makeRepetitiveBuffer(size) {
  const buf = Buffer.alloc(size);
  // Fill with a short repeating pattern — compresses extremely well
  const pattern = Buffer.from('ABCD');
  for (let i = 0; i < size; i++) {
    buf[i] = pattern[i % pattern.length];
  }
  return buf;
}

test('Sync decode with high compression ratio (8 KB repetitive)', (t) => {
  const buf = makeRepetitiveBuffer(8192);
  const encoded = encodeSync(buf, 12, 6);
  const ratio = buf.length / encoded.length;
  console.log(`8KB repetitive: ${buf.length} -> ${encoded.length} bytes (${ratio.toFixed(1)}x ratio)`);
  // With high repetition, compression ratio should be well above 4x,
  // forcing the decoder to retry with a larger buffer
  t.true(ratio > 4, `Expected compression ratio > 4x, got ${ratio.toFixed(1)}x`);
  const decoded = decodeSync(encoded, 12, 6);
  t.true(Buffer.compare(buf, decoded) === 0);
})

test('Async decode with high compression ratio (8 KB repetitive)', async (t) => {
  const buf = makeRepetitiveBuffer(8192);
  const encoded = await encode(buf, 12, 6);
  const ratio = buf.length / encoded.length;
  console.log(`8KB repetitive async: ${buf.length} -> ${encoded.length} bytes (${ratio.toFixed(1)}x ratio)`);
  t.true(ratio > 4, `Expected compression ratio > 4x, got ${ratio.toFixed(1)}x`);
  const decoded = await decode(encoded, 12, 6);
  t.true(Buffer.compare(buf, decoded) === 0);
})

test('Sync decode with very high compression ratio (32 KB repetitive, small window)', (t) => {
  const buf = makeRepetitiveBuffer(32768);
  // Small window size = smaller initial buffer estimate, more retries needed
  const encoded = encodeSync(buf, 8, 4);
  const ratio = buf.length / encoded.length;
  console.log(`32KB repetitive w8: ${buf.length} -> ${encoded.length} bytes (${ratio.toFixed(1)}x ratio)`);
  t.true(ratio > 4, `Expected compression ratio > 4x, got ${ratio.toFixed(1)}x`);
  const decoded = decodeSync(encoded, 8, 4);
  t.true(Buffer.compare(buf, decoded) === 0);
})

test('Async decode with very high compression ratio (32 KB repetitive, small window)', async (t) => {
  const buf = makeRepetitiveBuffer(32768);
  const encoded = await encode(buf, 8, 4);
  const ratio = buf.length / encoded.length;
  console.log(`32KB repetitive w8 async: ${buf.length} -> ${encoded.length} bytes (${ratio.toFixed(1)}x ratio)`);
  t.true(ratio > 4, `Expected compression ratio > 4x, got ${ratio.toFixed(1)}x`);
  const decoded = await decode(encoded, 8, 4);
  t.true(Buffer.compare(buf, decoded) === 0);
})

test('Decode simulated debug log (4 KB, realistic IoT payload)', async (t) => {
  // Simulate a debug log with repeating timestamp/message patterns
  const lines = [];
  for (let i = 0; i < 100; i++) {
    lines.push(`2026-03-14T21:17:${String(i % 60).padStart(2, '0')}.000Z [DEBUG] sensor_read: temp=23.${i % 10} humidity=45.${i % 5} pressure=1013.${i % 3}`);
  }
  const buf = Buffer.from(lines.join('\n'));
  const encoded = await encode(buf, 12, 6);
  const ratio = buf.length / encoded.length;
  console.log(`Debug log: ${buf.length} -> ${encoded.length} bytes (${ratio.toFixed(1)}x ratio)`);
  const decoded = await decode(encoded, 12, 6);
  t.true(Buffer.compare(buf, decoded) === 0);
})
