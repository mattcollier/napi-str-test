const assert = require('assert');
const addon = require('./dist/index.node');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite();

assert.strictEqual(
  addon.giveStr(Buffer.from('this is a tést 中 of utf-8')),
  'this is a tést 中 of utf-8');
assert.strictEqual(
  addon.giveString('this is a tést 中 of utf-8'),
  'this is a tést 中 of utf-8');

const buffers = [];
const strings = [];

for(let i = 0; i < 20; ++i) {
  const b = _makeid(10 * Math.pow(2, i));
  strings.push(b);
  buffers.push(Buffer.from(b));
}

for(const [index, value] of buffers.entries()) {
  suite
    .add(`buffer [SIZE=${value.length}]`, {
      minSamples: 50,
      fn: () => {
        // FIXME: NOOP for now currently segfaults
        addon.giveStr(value);
      }
    })
    .add(`string [SIZE=${value.length}]`, {
      minSamples: 50,
      fn: () => {
        addon.giveString(strings[index]);
      }
    });
}

suite
  .on('cycle', event => {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run();

function _makeid(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for(let i = 0; i < length; ++i) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
